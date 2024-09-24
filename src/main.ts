console.log("Aqui é o Marcão o jogador de Lobo Pidão");
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express();

app.use(express.json())

app.use(cors())

app.get("/produtos",async (req,res)=>{
    try{
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "banco1022b",
        port: 3306       
    })
    const [result,fields ] = await conexao.query("SELECT * from produtos")
    res.send(result)
    }catch(e){
    res.status(500).send("Erro do servidor")
    }
})

app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})