import express from 'express';


const app = express();

const port = 7000;

app.get("/", (req, res) => {
    res.json({ msg: "hello world" })
})

app.listen(port, () => {
    console.log(`the server running on http://localhost:${port}`);

})