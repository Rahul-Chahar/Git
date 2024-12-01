const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
  let{name, email, password, phone} = req.query;
    res.send(`Got a GET request: ${name}, ${email}, ${password}, ${phone}`);
});

app.post('/register', (req, res) => {
    let{name, email, password, phone} = req.body;
    res.send(`Got a POST request: ${name}, ${email}, ${password}, ${phone}`);
    });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

