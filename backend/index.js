
// let express = require("express")
// let app = express()
// let path = require("path")
// let cors = require("cors")

// const bodyParser = require('body-parser');
// let urlEncoderParser = bodyParser.urlencoded({extended: false})

// // app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// //global middleware 

// app.use(express.urlencoded({extends:false}))
// app.use(cors())
// app.use(express.json()) //to accept json as a body of the request 


// //might send the intended folder to browser??
// app.use(express.static(path.join(__dirname, "public")))


// //routes 

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "public", "index.html"))
// })

// app.get("/res", (req, res)=>{
//     res.send("<form action='res' method='POST'><button>send</button></form>")
// })

// app.post("/", (req, res)=>{
//     // res.send(req.body)
//     // res.send("hi")
//     // res.send("hellow")
//     // res.status(201).json(req.body)

//     // console.log(req)
//     // JSON.parse(JSON.stringify(req.body))
//     // console.log(req)
//     console.log(req.body)
//     // res.end("done")
// })


// app.listen(3000, ()=>{console.log("listenning...")})




const { json } = require("body-parser")
let express = require("express")
let app = express()

//setting mongoose 
let mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DBURL)
const db = mongoose.connection
db.on("error", error=>console.error(error))
db.once("open", ()=> console.log("connected to mongoose"))



//set routes; 

let data = [
    [ [ 33.408102, 44.35592 ], [ 33.3966, 44.356579 ] ],
    [ [ 33.36855, 44.37113 ], [ 33.378108, 44.401303 ] ],
    [[ 33.405231131533526, 44.37068939208985 ],[ 33.39849816260194, 44.37875747680665 ]], 
    [
        [ 33.39147812886539, 44.375518522971426 ],
        [ 33.405660877793345, 44.378437562258625 ]
    ]
        ]


//global middleware

app.use(express.static("public"))
app.use(express.json())

function giveData(req, res, next){
    res.send(data)
    next()
}

//routes 

app.get("/",(req, res)=>{
    res.sendFile()
})
app.post("/", (req, res)=>{
    console.log(req.body)
    res.send("the coords are " + req.body)
})

// app.get('/:id', (req, res)=>{
//     res.send("the id number is " + req.params.id)
// })

app.get("/data", (req, res)=>{
    console.log("fetched")
    res.json(data)
})



app.listen(process.env.PORT || 3000, console.log("listening..."))



