import clientPromise from "../../lib/mongo";


async function addPost(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("facebook");
        const {
            PcityName,
            Pdate,
            PTimeOne,
            PTimeTwo,
            DcityName,
            Ddate,
            DTimeOne,
            DTimeTwo,
            price,
            equipment,
            weight,
            distance,
            commodity,
            loadInfo,
        } = req.body;

        const posts = await db.collection("notes").insertOne({
            PcityName,
            Pdate,
            PTimeOne,
            PTimeTwo,
            DcityName,
            Ddate,
            DTimeOne,
            DTimeTwo,
            price,
            equipment,
            weight,
            distance,
            commodity,
            loadInfo,
        },
            { timestamps: true }
        );

        res.json(posts);
    } catch (error) {
        console.log(error);
    }
};
export default addPost;