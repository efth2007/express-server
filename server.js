const express = require('express');
const contactRoutes = require('./src/contact/routes');
require("dotenv").config();

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.send(`Yoo ${process.env.MESSAGE} !!!!!`)
   // res.send(`second line yaall`)
})

app.use('/api/v1/contacts', contactRoutes )

app.listen(port, () => console.log(`LISTENING ON.....${port}`))
