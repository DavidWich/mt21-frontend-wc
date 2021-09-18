import { MongoClient } from "mongodb";

import verifyToken from "../../../assets/functions/verifyToken";

const handler = async (req, res) => {
  const { abbreviation } = req.query;
  const { token } = req.body;

  const code = await verifyToken(token);

  if (code !== 200) {
    return res.status(code).end();
  }

  const client = await MongoClient.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const collection = client.db().collection("courses");
  const course = await collection.findOne({
    abbreviation: abbreviation,
  });

  client.close();

  res.status(200).json({
    courseData: {
      id: course._id.toString(),
      course: course.course,
      abbreviation: course.abbreviation,
      professor: course.professor,
      currentPeople: course.currentPeople,
      maxPeople: course.maxPeople,
    },
  });
};

export default handler;
