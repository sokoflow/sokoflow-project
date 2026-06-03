import { Router } from "express"

const router = Router();

router.post("/", (req, res) => {
    res.json({ msg: "data posted sucessfully!" })
});

export default router;