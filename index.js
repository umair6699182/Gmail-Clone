import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Connection from './database/config.js';
import Router from './Routes/Route.js';
import path from 'path';

const __dirname = path.resolve();


const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/" , Router);
dotenv.config();

app.use(express.static(path.join(__dirname,"./clinet/build")));

app.get("*" , function(_,res){
        res.sendFile(path.join(__dirname , "./clinet/build/index.html") ,function(err){
            res.status(500).send(err);
        })
})

Connection();

const Port = process.env.PORT || 8000;
app.listen(Port , ()=>{
    console.log(`Server is running on ${Port}`)
})