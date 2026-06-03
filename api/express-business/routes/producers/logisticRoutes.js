import { Router } from "express"

const router = Router();

router.get("/", (req, res) => {
    res.json({ msg: "logistics service" })
})

export default router;