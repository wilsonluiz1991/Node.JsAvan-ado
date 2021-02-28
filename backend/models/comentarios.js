const Conn = require('../config/db');

const Comentario = function(comentario) {
    this.nome = comentario.nome;
    this.msg = comentario.msg
}

Comentario.getAll = result => {
    const sql = "SELECT * FROM comentarios";
    Conn.query(sql, (error, res) => {
        if (error){
            return error
        } console.log("comentarios: ", res);
        result(null, res);
        })
    }
    
    Comentario.create = (newComentario, result) => {
        const sql = `INSERT INTO comentarios SET ?`;
        Conn.query(sql, newComentario, (error, res) =>{
            if(error){
                result (true, {error: "Mensagem não enviada"});
            } console.log("comentario enviado:");
            result(null, {id: res.insertId, ...newComentario});
        })
    }

    module.exports = Comentario;
