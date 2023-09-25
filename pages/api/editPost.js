import clientPromise from "../../lib/mongo";
import { ObjectId } from "mongodb";

export default async function editPost (req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("facebook");
        const { id } = req.query;
        const { password } = req.body;

        const post = await db.collection("users").updateOne(
            {
                _id: new ObjectId(id),
            },
            {
                $set: {
                    password: password,
                },
            }
        );

        res.json(post);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};