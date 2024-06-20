// import {} from "dotenv/config.js";// const express = require("express");
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// const app = express();
// app.use(cors({
//     origin: "*"
// }));

dotenv.config({
    path: "./.env",
  });


// app.use(express.json())

// app.set('view engine', 'ejs');


// app.use(express.static("./public"))
// app.use(express.static(path.join(__dirname,"public")));
// app.path()



// const upload = multer({ dest: 'files/'});







// app.get("/", (req, res) => {
//   res.send("Current You Are In A Dev Server");
// });
/*

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.get('/about', (req,res)=>{
    res.render('about', {title:'about', message:'Welcome to the about page' })
})

*/











// app.get('/api/jokes',(req,res)=>{
//     res.send(jokes);
// })

// app.post('/api/jokes',(req,res)=>{
//     console.log(req.body);
//     res.send("You Sucessfully sent your message")
    
// } )

const port = process.env.PORT || 5500;

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("Error:", error);
        throw error
    })

    app.listen(port || 8848, ()=>{
        console.log(`Server Is Listening At: http://localhost:${port}`
        );
    })
})
.catch((error)=> {
    console.log("Mongo Database connection failed", error);
})

