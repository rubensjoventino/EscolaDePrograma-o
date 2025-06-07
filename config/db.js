const Sequelize = require('sequelize');

const MSSQL_HOST = 'localhost';
const MSSQL_USER ='sa';
const MSSQL_PASSWORD = '123456789';
const MSSQL_DB = 'escolaDeProgramacao';
const MSSQL_PORT = '1433';  // porta padrao do sqlserver
const MSSQL_DIALECT = 'mssql';

const sequelize = new Sequelize(MSSQL_DB, MSSQL_USER, MSSQL_PASSWORD,{
    dialect: MSSQL_DIALECT,
    host: MSSQL_HOST,
    port: MSSQL_PORT
});

// async function testConnection(){
//     try {
//         await sequelize.authenticate();
//         console.log('Conexão estabelecida com sucesso');
//     } catch (error) {
//         console.log('Não foi possivel conectar ao banco de dados',error);
//     }
// }

// testConnection();

// Todas as vezes que for manipular o banco de dados usar o objeto "sequelize". 

module.exports = {sequelize};