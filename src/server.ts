import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes'
import cors from 'cors'
// import swaggerUi from 'swagger-ui-express'
// import swaggerDocs from './swagger.json'


const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000


app.use(cors())
app.use(express.json())
app.use(routes)
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  return res.json({
    message: 'API Aldisel'
  })
})