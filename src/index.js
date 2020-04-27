const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir')

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

requireDir("./models");

app.use("/api", require("./routes"));

app.get("/", (req, res) => {
    Content.create({
        title: "teste de api",
        description: "conteudo do teste por favor apareça"
    });
})

app.listen(3333);