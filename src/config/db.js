import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '52.172.228.94',
    user: 'nimbusdbadmin',
    password: 'N!mbu$My$QL!#P@ss',
    database: 'testing',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();

export default promisePool;
