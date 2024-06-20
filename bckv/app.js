import express from "express";
import cors from 'cors';




const app = express()


const jokes = [
    {
        id:1,
        name:'ram',
        message:'Joke 1'
    },
    {
        id:2,
        name:'Hari',
        message:'Joke 2'
    },
    {
        id:3,
        name:'Sita',
        message:'Joke 3'
    },
    {
        id:5,
        name:'Hali',
        message:'Joke 5'
    },
    {
        id:6,
        name:'Shanta',
        message:'Joke 6'
    },
    {
        id:7,
        name:'Gaurav',
        message:'Joke 7'
    }
]

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
}))



app.use(express.json({limit: "14kb"}))
app.use(express.urlencoded({ 
    extended: true,
    limit: 16000,
    parameterLimit: 2,
}))



// const middle = express.urlencoded({ 
//     extended: true,
//     limit: 16000,
//     parameterLimit: 2,
// })

// app.use(express.static("public"))



// routes 
import noticeRouter from './routes/notice.routes.js'
import { Notice } from "./models/notice.models.js";

let noticeData ;
async function dataCollector(){
 noticeData = await Notice.find();
//  console.log(noticeData);
}

dataCollector()

// routes decleration
app.use("/api/v1/notice", noticeRouter)

/*
let mainData;

app.get('/api/jokes', (req, res)=>{
 
    res.send(jokes)

})

*/

// app.post('/receive/api', (req, res)=>{
//     let data = req.body;
//     mainData = data;
//     console.log(data);

// })

// app.get('/info', (req,res) => {
//     res.send(mainData || 'hello')
// })

app.get('/', (req, res) => {
    res.json("Hello Vercel")
})

app.get('/api/v1/noticeData', (req, res) => {
            dataCollector()
            res.send(noticeData)
})

export {app , dataCollector}