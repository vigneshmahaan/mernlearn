import express from "express";

const router = express();

router.get('/movies', (req, res) => {
    res.send("get the movies list")
})

router.post('/movies', (req, res) => {
    res.send("create an movies")
})

router.put('/movies/:id', (req, res) => {
    res.send("update an movies")
})

router.delete('/movies/:id', (req, res) => {
    res.send("delete an movies")
})
export default router