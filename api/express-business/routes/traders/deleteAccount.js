import { Router } from "express"

const router = Router();

router.delete("/account/:id", (req, res) => {
    const { id } = req.params;

    res.json({ msg: `Account deleted, id ${id}` })
});

export default router;