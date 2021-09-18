import { MongoClient } from "mongodb";

import verifyToken from "../../assets/functions/verifyToken";

const handler = async (req, res) => {
  const { email, token } = req.body;

  const code = await verifyToken(token);

  if (code !== 200) {
    return res.status(code).end();
  }

  const client = await MongoClient.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const coll = db.collection("mails");
  const emails = await coll.find({ recipient: email }).toArray();

  client.close();

  res.status(201).json({ emails: emails });
};

export default handler;
