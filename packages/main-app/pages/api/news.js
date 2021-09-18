import { MongoClient } from "mongodb";

import verifyToken from "../../assets/functions/verifyToken";

const handler = async (req, res) => {
  const { email, token } = req.body;

  const courseQuery = ["", "ALL"];
  const code = await verifyToken(token);

  const client = await MongoClient.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const courseColl = db.collection("accounts");
  const courses = await courseColl.findOne({ id: email }, { courses: 1 });
  if (courses && code === 200) {
    courseQuery.push(...courses.courses);
  }

  const newsColl = db.collection("news");
  const news = await newsColl.find({ course: { $in: courseQuery } }).toArray();

  client.close();

  return res.status(200).json({ news });
};

export default handler;
