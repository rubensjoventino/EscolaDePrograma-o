const { default: Message } = require('tedious/lib/message');
const { alunoModel } = require('../models/alunoModel');

const alunoController = {
    listarAlunos: async (req, res)=>{
        try {
            let alunos = await alunoModel.findAll();
            return res.status(200).json(alunos);
            
        } catch (error) {
            console.error("Erro ao listar alunos:",error);
            return res.status(500).json({message: "Erro ao listar alunos"});
        }

    },
    cadastrarAluno: async (req, res)=>{
         try {
            const {nomeAluno, cpfAluno, dataNascimentoAluno, emailAluno, telefoneAluno, enderecoAluno} = req.body;

            if (!nomeAluno || !cpfAluno || !dataNascimentoAluno || !emailAluno) {
                return res.status(400).json({message:"Campos obrigatorios não preenchidos"});
            }

            let aluno = await alunoModel.findOne({where:{
                [Op.or]: [
                    {cpfAluno},
                    {emailAluno}
                ]
            }});

            if(aluno){
                return res.status(409).json({message:"Aluno já cadstrado!"});
            }

            await alunoModel.create({nomeAluno, cpfAluno, dataNascimentoAluno, emailAluno, telefoneAluno, enderecoAluno});

            return res.status(201).json({message:"Aluno cadastrado com sucesso!"});
            

        } catch (error) {
            console.error("Erro ao cadastrar aluno:",error);
            return res.status(500).json({message: "Erro ao cadastrar aluno"});
        }
    },
    atualizarAluno: async (req, res)=>{
        const {ID_Aluno} = req.params;
     try {
            
            const {ID_Aluno} = req.params;
            const {nomeAluno, cpfAluno, dataNascimentoAluno, emailAluno, telefoneAluno, enderecoAluno} = req.body;
    
            let aluno = await alunoModel.findByPk(ID_Aluno);
    
            if(!aluno){
                return res.status(404).json({message: "Aluno não encontrado!"});
            }
            
            let dadosAtualizados = {nomeAluno, cpfAluno, dataNascimentoAluno, emailAluno, telefoneAluno, enderecoAluno};
    
            await alunoModel.update(dadosAtualizados, {where:{ID_Aluno}});
    
            aluno = await alunoModel.findByPk(ID_Aluno);
    
            return res.status(200).json({message: "Aluno atualizado com sucesso:", Aluno: aluno});

        } catch (error) {
            
            console.error("ERRO AO ATUALIZAR ALUNO:", error);
            return res.status(500).json({message: "ERRO AO ATUALIZAR ALUNO"});
        }

    
    },
    deletarAluno: (req, res)=>{
        const {ID_Aluno} = req.params;

    res.send(`Usuario ${ID_Aluno} foi deletado com sucesso!`);
}
};

module.exports = { alunoController };
