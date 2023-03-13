import express from "express"
import sequelize from "./database.js"
import User from "./models/user.js"
import mainRoutes from "./routes/main.js"
import userRoutes from "./routes/user.js"

const app = express()
// Server port
const HTTP_PORT = 3000

// Routes
app.use( mainRoutes )
app.use( userRoutes )

// Start server 
app.listen( HTTP_PORT, () => {
    console.log(`Server running at port: ${HTTP_PORT}`)
})
