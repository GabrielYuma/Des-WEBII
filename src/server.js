const express = require('express'); 
const cors = require('cors');
const routes = require("./routes")
const mongoose = require('mongoose');

const server =  express();
const porta = 8080;

mongoose.connect('mongodb+srv://desweb2:1352@cluster0.qq0xu.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

server.use(cors());
server.use(express.urlencoded({extended:true})); //middleware para tratamento das requests
server.use(express.json()); //middleware para tratamento das requests
server.use(routes);

routes.get('/', (req, res) => {
    res.json({'message': 'Servido está funcionando'})
})

server.listen(porta, ()=>{
    console.log("Servidor rodando na porta: "+ porta)
})