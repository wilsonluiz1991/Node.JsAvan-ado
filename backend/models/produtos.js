const Conn = require('../config/db');

const Produto = function(produto) {
    return this;
}

Produto.getAll = result => {
    const sql = "SELECT * FROM produto JOIN categorias ON produto.id_categoria = categorias.id_categoria ";
    Conn.query(sql, (error, res) => {
        if (error){
            return error
        } console.log("produto: ", res);
        result(null, res);
        })
    }
    
    module.exports = Produto;
    
