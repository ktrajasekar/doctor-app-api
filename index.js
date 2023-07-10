const express = require("express");
const app = express();
app.use(express.json());

app.get('/login', (req, res) => {
    res.send('Get All API')
});

app.get('/', (req, res) => {
    res.send('it works');
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});