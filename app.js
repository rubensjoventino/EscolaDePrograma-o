const express = require("express");
//IMPOSTAÇÃO DE ROTAS
const{rotasAlunos} = require('./src/routes/alunoRoutes');
// APP

const app = express();  // cria uma instancia do express, armazena todos os metodos e funcionalidades em APP
const PORT = 8081;

app.use(express.json()); // configura o body-parser para interpretar corpos de requisiçao no formato JSON.

app.use("/alunos", rotasAlunos);

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});