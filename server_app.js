const express= require('express')//import expres in serv_app file
const path= require('path')
const {v4}=require('uuid')
const app= express()//put  object express on app

let CONTACTS= [// emulaitor of db
    {id:v4(), name:'cat', value:'ndsfdjf@kk',marked: false}
]

app.use(express.json())// req now can work with json format
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
app.post('/api/contacts',(req,res)=>{
   const contact={... req.body, id: v4(), marked:false}
   CONTACTS.push(contact)
res.status(201).json(contact)// el from clinte side was created
})

//DELETE
app.delete('/api/contacts/:id',(req,res)=>{
   
CONTACTS= CONTACTS.filter(c=>c.id !== req.params.id)

res.status(200).json({massage:"Contact was deleted"})

})



app.listen(3000,()=> console.log('Server has been started on port 3000...'))//http://localhost:3000/