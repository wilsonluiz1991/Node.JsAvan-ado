const express = require('express'),
    server = express(),
    cors = require('cors');

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.end("<html>Hello world</html>")
})

require('./routes/produtos.routes.js')(server);
require('./routes/comentarios.routes.js')(server);


server.listen(5000, ()=>{
    console.log("Server on!")
})