const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'NEWS_PORTAL_NODE',
      insecureAuth : true
    });
}