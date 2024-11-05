const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
  })
//  const pool = new Pool({
//      user: 'postgres',
//      password: '0129',
//      host: 'localhost',
//      port: 5432,
//      database: "ChessClubTestDB",
   
//  });


module.exports = pool;