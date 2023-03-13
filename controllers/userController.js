import express from "express"
import sequelize from "../database.js"
import User from "../models/user.js"

const app = express()

app.get('/')
