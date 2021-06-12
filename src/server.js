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
//18.221.101.0
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


//const express = require('express');
const sync = require('./bd/postgres').sincronizarPostgres;
const app = express();
const port = process.env.APP_PORT;
const hostname = process.env.APP_HOSTNAME;

const pessoasRoutesPg = require('./routes/pessoasRoute_2');
const unidadesRoutesPg = require('./routes/unidadesRoute_2');
const agendamentosRoutesPg = require('./routes/agendamentoRoute_2');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use('/', defaultRoutes);

app.use('/dados/pessoaspg', pessoasRoutesPg);
app.use('/dados/unidadespg', unidadesRoutesPg);
app.use('/dados/agendamentospg', agendamentosRoutesPg);


app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço: https://${hostname}:${port}`);
});