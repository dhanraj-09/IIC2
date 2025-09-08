const mysql = require('mysql2');

// Create a connection pool. This is better than a single connection for web applications
// because it manages multiple connections and prevents issues with dropped connections.
const pool = mysql.createPool({
    host: 'localhost', // Or your database server's IP address
    user: 'root',      // Your MySQL username
    password: 'Oplm090@', // Your MySQL password
    database: 'alumni_database', // The name of the database you created
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// We use the promise-based version of the pool to use async/await syntax.
const promisePool = pool.promise();

// Export the pool to be used in other files.
module.exports = promisePool;