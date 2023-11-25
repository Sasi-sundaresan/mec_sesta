const expRef = require('express')
const sqlRef = require('mysql2')
const bodyParser = require('body-parser')
const sesta=require('./sesta')


const app = expRef()
app.use('/sesta',sesta)


app.listen(1122,()=>{
    console.log("My server is running")
})