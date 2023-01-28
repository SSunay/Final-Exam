const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const  mongoose  = require('mongoose')
const {Schema}=mongoose
const dotenv = require('dotenv')
dotenv.config()
mongoose.set('strictQuery', false);
app.use(cors())
app.use(bodyparser.json())

const logisticSchema = new Schema({
    img:{type:String,required:true},
    price:{type:Number,required:true},
    title:{type:String,required:true},
})
const Logistic = mongoose.model('logistics',logisticSchema)

 /// get all data
app.get('/logistics', (req, res) => {
        Logistic.find({},(err,doc)=>{
            if(!err){
                res.send(doc)
            }else{
                res.status(500),json({message:err})
            }
        })
})

// get by id

app.get('/logistics/:_id',(req,res)=>{
    const {_id}=req.params
    Logistic.findById(_id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404),json({message:'nor found....'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})

/// delete


app.delete('/logistics/:_id',(req,res)=>{
    const {_id}=req.params
    Logistic.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
            res.send('success...')
        }else{
            res.status(500).json({message:err})
        }
    })
})


/// post new item

app.post('/logistics',(req,res)=>{
    let logic = new Logistic({
        img:req.body.img ,
        price:req.body.price,
        title:req.body.title ,
    })
    logic.save()
    res.send('success...')
})


PORT= process.env

DB= process.env.DB_URL.replace('<password>',process.env.PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('DB connected')
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

    }
})
