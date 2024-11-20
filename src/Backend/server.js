const express = require("express")
const app= express()
const port=3000


app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

info={username:'waseem123',
        password:"12345"
}

app.post('/login',(req,res)=>{
    const {username,password} = req.body

    if(username==info.username);
    if(password==info.password);

    res.send(200).json({
        message:"login succrsfull"
    })
})


app.get('/info',(req,res)=>{
    res.send(info)
})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

