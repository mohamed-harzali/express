const express = require ('express')
const router = express.Router()
const path = require ('path')

// middleware
const accessMiddleware = (req,res,next)=>{
    var date = new Date()
    var hour = date.getHours() 
    var day = date.getDay()

    if([1,2,3,4,5].includes(day) && (hour>=9 && hour<17)){
        console.log('welcome')
        next();
    }else{
        console.log('we are closed')
        res.sendFile(path.resolve(__dirname,'../','public','closed.html'))
    }
}

// routes

router.get('/',accessMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','HomePage.html'))
})

router.get('/contact',accessMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','ContactUs.html'))
})

router.get('/services',accessMiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','OurServices.html'))
})

module.exports=router