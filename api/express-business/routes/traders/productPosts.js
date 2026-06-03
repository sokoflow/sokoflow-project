import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {
    res.json({ msg: "product posts" });
});

export default router; 