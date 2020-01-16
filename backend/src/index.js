const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://jpchagas:pegasos93@cluster0-fz8jq.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json);
app.use(routes)
//Método HTTP: GET,POST,PUT, DELETE

//Tipo de ParÂMETROS:
//Query Params: request.query(Filtros, ordenação, paginação,....)
//Route Params: request.params(identificar um recurso na alteração ou atualização)
//Body: request.body (Dados para criação ou alteração de recurso)

//MongoDB


app.listen(3333);

