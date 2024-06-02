import express from 'express'
import Router from '../routes/routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT ?? 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', Router)

app.listen(PORT, () => {
  console.log(`Server corriendo en el port ${PORT}`)
})

export default app
