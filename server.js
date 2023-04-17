const express = require('express');
const contactRoutes = require('./src/contact/routes');

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Yooooooo")
})

app.use('/api/v1/contacts', contactRoutes )

app.listen(port, () => console.log("LISTENING....."))
