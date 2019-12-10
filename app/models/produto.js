/**
 * Arquivo: produto.js
 * Author: Gustavo
 * Descrição: arquivo responsável onde trataremos o modelo da classe 'Produto'
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Produto:
 * 
 * -> Id: int
 * -> Nome: String
 * -> Preco: Number
 * -> Descricao: String
 * 
 */

var ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);