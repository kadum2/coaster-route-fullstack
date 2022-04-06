

let express = require("express")
let app = express()

//setting parsers 
const { json } = require("body-parser")

//setting mongoose 
let mongoose = require("mongoose")
// require("dotenv").config({path: "env"})
// mongoose.connect(process.env.DBURL)

mongoose.connect("mongodb://localhost/dbname")


const db = mongoose.connection
db.on("error", error=>console.error(error))
db.once("open", ()=> console.log("connected to mongoose")) // make a call ??

//schema

// const User = require("./paths")
// const path = require("path")
const paths = require("./paths.js")
const path = require("path")
// const path = require("path")
// const { create } = require("./paths")
// const user = paths.create({}).then(console.log("saved")) //add to database and get a reference to it ??
// console.log(user) // log the saved data


//global middleware

app.use(express.static("./public"))
app.use(express.json())



app.get("/", (req, res)=>{
    res.send("home page")
})

//set data; 
//no need 

// let data = [
//     [[ 33.408102, 44.35592 ], [ 33.3966, 44.356579 ]],
//     [[ 33.36855, 44.37113 ], [ 33.378108, 44.401303 ]],
//     [[ 33.405231131533526, 44.37068939208985 ],[ 33.39849816260194, 44.37875747680665 ]], 
//     [[ 33.39147812886539, 44.375518522971426 ],[ 33.405660877793345, 44.378437562258625 ]]
//         ]

// data.forEach(e=>{
//     paths.create({path:e})
// })


    // paths.deleteMany({}, ()=>console.log("removed"))


// // add data; confirmed paths collection; routes; each document is a route; id, startpoint; array of two numbers, end point; array of two numbers 
// let pa={
//     path: Array
// }





// async function addPaths (vari){


//     paths.create(vari)


// // let created = await data.forEach(e=>{
// //     paths.create({startpoint: e[0], endpoint: e[1]})
// // })
// // console.log("created; " + created)
// // return created
// }



// addPaths(data)

    // let newP = new paths()
    // paths.create({path: []})

// data.forEach(e=>{
//     console.log(e[0], e[1])
//     // paths.create({"path": {startpoint: e[0], endpoint: e[1]}})

//     paths.create({path: [1, 3]})
// })



// console.log()
// paths.deleteMany({}, ()=>{console.log("deleted")})





// function giveData(req, res, next){
//     res.send(data)
//     next()
// }


//routes 
//setting the app 
//setting paths to db; 

//getting from db route

app.get("/path",async (req, res)=>{
    try{
        let resp = await paths.find()
        // let wresp = await paths.create({path: (await paths.find()).length+1})
        console.log(resp)
        res.json(resp)
    }catch(err){
        console.log("error"+err)
    }
})

app.post("/path", async (req, res)=>{
    console.log(req.body)
    console.log(req.body.length)

    if(req.body.length>1){
        Object.values(req.body).forEach(e=>paths.create({path:e}))
    }else{
    paths.create({path: req.body})

    }
})



// app.get("/",(req, res)=>{
//     res.sendFile()
// })
// app.post("/", (req, res)=>{
//     console.log(req.body)
//     res.send("the coords are " + req.body)
// })

// app.get('/:id', (req, res)=>{
//     res.send("the id number is " + req.params.id)
// })

// app.get("/data", (req, res)=>{
//     console.log("fetched")
//     res.json(data)
// })




app.listen(process.env.PORT || 3000, console.log("listening..."))
// app.listen(3300, console.log("listening..."))



