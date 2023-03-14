import express from "express"
import mainRoutes from "./routes/main.js"
import userRoutes from "./routes/user.js"
import bodyParser from "body-parser"
import { initDatabase } from "./database.js"

const app = express()

initDatabase()

// config body parser
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }))

// Routes
app.use( mainRoutes )
app.use( userRoutes )

// Server port
const HTTP_PORT = 3000
// Start server 
app.listen( HTTP_PORT, () => console.log(`Server running at port: ${HTTP_PORT}`))
