const express = require ('empress')
const  app = express()
const port = 3000;

app.use(express.static(`${__dirname}/public`))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)})


/*app.get('/', (req, res) {
    res.sendFile(`${__dirname}/index.html`)
  })
  

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`
  ${re.url}
  ${re.method}
  ${rawHeaders}
  `);
});*/ 

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});