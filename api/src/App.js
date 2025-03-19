import app from 'config/Server.js';
import connection from './config/ConnectionDataBase.js';

const PORT = process.env.PORT || 2345;

const openServer = () => {
        console.log(`Conectou com o Banco de Dados na URL http://localhost:${process.env.PORT || 3306}/${process.env.DATABASE}`);
        
        app.listen(PORT, () => {
        console.log(`O Servidor esta rodando URL: http://localhost:${PORT}`);
    })
};

connection.connect(error => error ? console.log(error) : openServer());
