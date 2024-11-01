import dbconnection from './DBconnection/Connection.js'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config({
    path:'./.env'
})
const app = express();
const PORT = 4000;
dbconnection()

app.get('/', (req, res) => {
    return res.send("hello")
})
app.listen(() => {
    console.log("port no.", PORT);
})