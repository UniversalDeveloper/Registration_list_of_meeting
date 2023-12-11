const express= require('express')//import expres in serv_app file
const path= require('path')
const {v4}=require('uuid')
const app= express()//put  object express on app

const CONTACTS= [
    {id:v4(), name:'cat', value:'ndsfdjf@kk',marked: false}
]

//GET
app.get('/api/contacts',(req,res)=>{
    setTimeout(()=>{
res.status(200).json(CONTACTS)

    },"1000")
    
})

app.use(express.static(path.resolve(__dirname,'client')))//create static folder 

app.get('*',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'client','index.html'))
})

//POST
app.post('*',(req,res)=>{

})

app.listen(3000,()=> console.log('Server has been started on port 3000...'))//http://localhost:3000/