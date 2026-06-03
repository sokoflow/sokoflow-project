import express from "express"
import { Router } from "express"

const router = Router();

router.post("/", (req, res) => {
    res.json({ msg: "signed up" });
});

export default router;