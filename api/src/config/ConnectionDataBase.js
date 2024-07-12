import mysql from 'mysql'

export const configDataBase = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'tasknek'
}

const connection = mysql.createConnection(
    {
        host: configDataBase.host,
        port: configDataBase.port,
        user: configDataBase.user,
        password: configDataBase.password,
        database: configDataBase.database
    }
)
/**
 * Execute code SQL
 * @param {strung} sql code SQL
 * @param {string | [task, id]} values params to request find request in the data base
 * @param {string} mensage return of the result query
 * @returns  Promise with data requests or error
 */
export function requestInDataBase(sql, values="", mensage) {
    return new Promise((resolve, reject) => {
        connection.query(
            sql, 
            values,
            (error, result) => {
                if(error) return reject(mensage);

                const makeResult = JSON.parse(JSON.stringify(result));
                return resolve(makeResult);
            }
        );
    })
}

export default connection;