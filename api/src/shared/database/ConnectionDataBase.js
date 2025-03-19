import mysql from 'mysql'

const connection = mysql.createConnection(
    {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
);
/**
 * Execute code SQL
 * @param {strung} sql code SQL
 * @param {string | [task, id]} values params to request find request in the data base
 * @param {string} mensage return of the result query
 * @returns  Promise with data requests or error
 */
export function makeQuery(sql, values = "", mensage) {
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