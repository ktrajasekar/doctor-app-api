const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const users = require("./data/users.json")
app.use(cors());

app.get('/api/login', (req, res) => {
    res.status(200).json({ users: users });
});

app.get('/', (req, res) => {
    res.send('it works');
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});