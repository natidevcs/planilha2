const transacoes = {
    transacoes: [
     {
       valor: 10,
       descricao: "Pastel",
       categoria: "Despesa"
     },
     {
       valor: 3,
       descricao: "venda Doce",
       categoria: "Receita"
     }
   ]
 }

class TransacoesRepositorio {

    listaTransacoes () {
        return transacoes
    }
    criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
    }
    
}
module.exports = TransacoesRepositorio