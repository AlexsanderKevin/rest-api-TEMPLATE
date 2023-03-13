import express from "express"
import mainRoutes from "./routes/main.js"
import userRoutes from "./routes/user.js"
import bodyParser from "body-parser"

const app = express()
// Server port
const HTTP_PORT = 3000

// config body parser
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }))

// Routes
app.use( mainRoutes )
app.use( userRoutes )

// Start server 
app.listen( HTTP_PORT, () => {
    console.log(`Server running at port: ${HTTP_PORT}`)
})
