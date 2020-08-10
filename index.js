const express = require ("express")
const app = express()
const UserController = require('./controllers/UserController'); 
const StatusController = require('./controllers/StatusController'); 
const bodyParser = require("body-parser")
var morgan = require('morgan')



app.use(morgan("dev"));

app.use(bodyParser());

app.get('/login', (ctx)=>{ctx.body="salve"});

app.get("/:valorsensor1",(req,res)=>{
    let distancia = req.params.valorsensor1
    console.log(distancia)
    if (distancia <= 100) {
        let status="Perigo"
        console.log(status)
        StatusController.add({distancia,status})
      } else if (distancia <= 200) {
        let status="Normal"
        console.log(status)
        StatusController.add({distancia,status})
      } else if (distancia >= 300) {
        let status="Seguro"
        console.log(status)
        StatusController.add({distancia,status})
      }
      return res.send("pluvial").end()
})

app.post('/dados', async dados => {
   await UserController.add(dados)
    .then(leagueoflegends => {
        console.log (leagueoflegends)
    }) 
})


app.listen(3001,()=>{
    console.log ("rodando na porta 3001")
});

