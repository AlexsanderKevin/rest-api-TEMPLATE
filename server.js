import express from "express"
const db = require('./database')

const app = express()
// Server port
const HTTP_PORT = 3000

// Start server 
app.listen( HTTP_PORT, () => {
    console.log(`Server running at port: ${HTTP_PORT}`)
})

// Root endpoint
app.get('/', ( req, res ) => {
    res.json({ "message": "ok" })
})
