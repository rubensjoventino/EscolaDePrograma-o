const express = require("express");
const router = express.Router(); // instancia o router, objeto do express usado para definir rotas de forma modular e organizada.

const {alunoController} = require('../controllers/alunoController');

// rotas de alunos 
router.get("/", alunoController.listarAlunos);

router.post("/", alunoController.cadastrarAluno);

router.put("/:ID_Aluno", alunoController.atualizarAluno); // rota responsavel por atualizar os dados do aluno 

router.delete("/:ID_Aluno" ,alunoController.deletarAluno);

module.exports = { rotasAlunos: router};