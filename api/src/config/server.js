import app from '../app/app.js';
import connection from './ConnectionDataBase.js';
import { configDataBase } from './ConnectionDataBase.js';

const PORT = 2345;

const openServer = () => {
        console.log(`Conectou com o Banco de Dados na URL http://localhost:${configDataBase.port}/${configDataBase.database}`);
        
        app.listen(PORT, () => {
        console.log(`O Servidor esta rodando URL: http://localhost:${PORT}`);
    })
};

connection.connect(error => error ? console.log(error) : openServer());
