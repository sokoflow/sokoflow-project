import { Router } from "express"

const router = Router();

router.post("/", (req, res) => {
    res.json({ msg: "Posted data!" })
});

export default router;