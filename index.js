import express from 'express';
import movieRoute from 'file:///D:/mernlearn/routes/movie.route.js';



const app = express();

const port = 7000;

app.get("/", (req, res) => {
    res.json({ msg: "hello world" })
})

app.use('/movies', movieRoute)





app.listen(port, () => {
    console.log(`the server running on http://localhost:${port}`);

})