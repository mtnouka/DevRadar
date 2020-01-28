const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-n7ixr.mongodb.net:27017,omnistack-shard-00-01-n7ixr.mongodb.net:27017,omnistack-shard-00-02-n7ixr.mongodb.net:27017/week10?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query params: req.query (Filtros, ordenação, paginação, ...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)