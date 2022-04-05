

const mongoose = require('mongoose')
const { stringify } = require('querystring')
// const mn = require("expr")

const pathsSchema = new mongoose.Schema({
// name: {
// type: String, 
// // required: true,
// // immutable: true, 
// // default: ()=>new Date.now(),
// // default: () ⇒ new Date.now(),
// },
// age: Number
// tags: [{type: Number}]


// path: {startpoint: Array,endpoint: Array}
// path: {startpoint: [Number, Number],endpoint: [Number, Number]}
// path: {type: [Number, Number],type: [Number, Number]}

path: Array
})

// coord: [
//     {
//         "lat": 50.3299594,
//         "lng": 6.9393006
//     },
//     {
//         "lat": 50.3295046,
//         "lng": 6.9390688
//     },
//     {
//         "lat": 50.3293714,
//         "lng": 6.9389939
//     },
//     {
//         "lat": 50.3293284,
//         "lng": 6.9389634
//     }]
    

module.exports = mongoose.model("Pahts", pathsSchema)

//at the database, server file; 

