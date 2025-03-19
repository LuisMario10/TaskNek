import { create } from '../../domain/Users/User.Repository'


export const post = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if(!req.body) res.status(422).json({ statusCode: 422, msg: "Fields cannot be null" });

        await create(u)
    } catch {
        res.status(500).json({ statusCode: 500, msg: "Server Internal Error" });
    }
}
