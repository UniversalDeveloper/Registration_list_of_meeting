const express= require('express')//import expres in serv_app file
const path= require('path')
const app= express()//put  object express on app

const CONTACTS= [
    {id:1, name:'cat', value:'ndsfdjf@kk',marked: false}
]

app.use(express.static(path.resolve(__dirname,'client')))//create static folder 

app.get('*',(req, res) =>{
    res.sendFile(path.resolve(__dirname,'client','index.html'))
}
)
app.listen(3000,()=> console.log('Server has been started on port 3000...'))//http://localhost:3000/