const database = "fecinavidb";
const collection = "trabalhos";

use("fecinavidb");

db.createCollection(collection);

//Adicione 4 trabalhos na coleção “trabalhos” utilizando o comando insertMany
use("fecinavidb");
db.trabalhos.insertMany([
    {
        titulo: "Gerenciamento de Renda",
        area: "Empreendimento",
        autores:[
            {nome:"Felipe Brito",email:"felipe.brito444@gmail.com"},
            {nome:"Gustavo Oliveira",email:"gustavo.oliveira67@gmail.com"}
        ],
        dataEnvio:[
            {data:"2024-10-02"}
        ],
        avaliadores:[
            {cpf: "561.513.901-90",nome:"Lucas Eduardo",nota:10},
            {cpf: "725.534.765-24",nome:"Paulo Mendis",nota:10},
            {cpf: "451.763.741-87",nome:"Gustavo Silva",nota:10}
        ],
        mediaAvaliacoes: 10
    },
    {
        titulo: "Site de Painel Solar",
        area: "Desenvolvimento Web",
        autores:[
            {nome:"Mathus Montes",email:"matheus.montes12@gmail.com"},
            {nome:"Marcos Valerio",email:"marcos.valerio16@gmail.com"}
        ],
        dataEnvio:[
            {data:"2024-10-02"}
        ],
        avaliadores:[
            {cpf: "561.513.901-90",nome:"Lucas Eduardo",nota:7},
            {cpf: "725.534.765-24",nome:"Paulo Mendis",nota:7},
            {cpf: "451.763.741-87",nome:"Gustavo Silva",nota:7}
        ],
        mediaAvaliacoes:7
    },
    {
        titulo: "Plano de Treino",
        area: "Desenvolvimento de Sistemas",
        autores:[
            {nome:"Luiz Prado",email:"luiz.prado31@gmail.com"},
            {nome:"Felipe Lima",email:"felipe.lima71@gmail.com"}
        ],
        dataEnvio:[
            {data:"2024-10-02"}
        ],
        avaliadores:[
            {cpf: "561.513.901-90",nome:"Lucas Eduardo",nota:9},
            {cpf: "725.534.765-24",nome:"Paulo Mendis",nota:9},
            {cpf: "451.763.741-87",nome:"Gustavo Silva",nota:9}
        ],
        mediaAvaliacoes: 9
    },
    {
        titulo: "Venda de Cosmeticos",
        area: "Desenvolvimento de Sistemas",
        autores:[
            {nome:"Maria Fernanda",email:"maria.fernada52@gmail.com"},
            {nome:"Vitor Valentin",email:"vitor.valentin9@gmail.com"}
        ],
        dataEnvio:[
            {data:"2024-10-02"}
        ],
        avaliadores:[
            {cpf: "561.513.901-90",nome:"Lucas Eduardo",nota:6},
            {cpf: "725.534.765-24",nome:"Paulo Mendis",nota:8},
            {cpf: "451.763.741-87",nome:"Gustavo Silva",nota:7}
        ],
        mediaAvaliacoes: 7
    }
])

//Adicione 1 trabalho na coleção “trabalhos” utilizando o comando insertOne em que a área seja de “Biológicas”;
use("fecinavidb")
db.getCollection("trabalhos").insertOne({
    titulo: "Bioquímicos",
        area: "Biológicas",
        autores:[
            {nome:"Maria Vitoria",email:"maria.vitoria52@gmail.com"},
            {nome:"Emilly Giovana",email:"emilly.giovana76@gmail.com"}
        ],
        dataEnvio:[
            {data:"2024-10-02"}
        ],
        avaliadores:[
            {cpf: "561.513.901-90",nome:"Lucas Eduardo",nota:9},
            {cpf: "725.534.765-24",nome:"Paulo Mendis",nota:8},
            {cpf: "451.763.741-87",nome:"Gustavo Silva",nota:6}
        ],
        mediaAvaliacoes: 7.66
})

//Faça um código que liste todos os 5 trabalhos cadastrados na coleção “trabalhos”
use("fecinavidb")
db.trabalhos.find()

//Faça um código que liste todos os trabalho pertencentes a área de “Biológicas”
use("fecinavidb")
db.trabalhos.find(area:"Biológicas")