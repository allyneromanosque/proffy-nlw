//criacao do servidor e configuração das rotas para abrir
// vamos deixar comentada porque reorganizamos tudo isso logo abaixo.
// const express = require('express')
// const server = express()

// server.use(express.static("public"))

// .get("/", (req, res) => {
//     return res.sendFile(__dirname + "/views/index.html")
// })

// .get("/study", (req, res) => {
//     return res.sendFile(__dirname + "/views/give-classes.html")
// })

// .get("/give-classes", (req, res) => {
//     return res.sendFile(__dirname + "/views/give-classes.html")
// })

// .listen(5500)


//vamos estruturar melhor os dados da pagina de estudo 
//ou seja, vamos colocar a informação dos professores de forma dinamica

//Dados
//Refaturamos os dados importantes estão na format.js
//os dados nao necessarios apenas para test estão na fake_data.js
//servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')



//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e config servidor
server
//receber os dados no req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//start servidor
.listen(5500)

// como vamos fazer isso se estruturar no HTML para dinamizar a pagina study?
//vamos instalar o nunjucks - npm install nunjucks