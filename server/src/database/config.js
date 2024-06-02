import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const { Pool } = pkg

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASS, DB_PORT } = process.env

 const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASS,
  port: DB_PORT,
  allowExitOnIdle: true
})

const data = (query, values) => pool
.query(query, values)
.then(({rows}) => rows)
.catch(({ code, message}) => {
  const error = { status:false, code, message}
  throw error
})

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('Error al conectarse a DB:', err)
  } else {
    console.log('DB conectada', res.rows[0].now)
  }
})

export default data