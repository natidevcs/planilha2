require('dotenv/config')
const express = require ('express')

const TransacoesRepositorio = require("./infra/sql-transacoes-repositorio.js")

const app = express()
const port = 3000;

// precisa ter para acessar o req.body
app.use(express.json())
 // "serve" arquivos da pasta public
app.use(express.static(`${__dirname}/public`))

app.get('/transacoes', async (req, res) => { 
  const repositorio = new TransacoesRepositorio()
  var transacoes = await repositorio.listaTransacoes()

  /*{
    transacoes: [
      {"valor": 10, "descricao": "bolo", categoria: "Despesa"}
    ]
  }*/
  let saldo = 0
  transacoes.transacoes.forEach((transacao) => {
    if(transacao.categoria === "Despesa") {
      saldo = saldo - transacao.valor
    }
    if (transacao.categoria === "Receita") {
      saldo = saldo + transacao.valor
    }
  })
  transacoes.saldo = saldo

  res.send(transacoes)
})

app.post('/transacoes', async (req, res) => {
  const repositorio = new TransacoesRepositorio()
  const transacao = req.body
  await repositorio.criarTransacao(transacao)
  res.status(201).send(transacao)
}) 

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`)
});



