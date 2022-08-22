const express = require('express')
const router = express.Router()


//Get All
router.get('/',(req,res) => {
    res.send('Get All POSTS')
})

//Add
router.post('/',(req,res) => {
    res.send("Post POSTS")
})

//Update
router.put('/',(req,res) => {
    res.send("Put POSTS")
})

//Delete
router.delete('/:id',(req,res) => {
    res.send("Delete POSTS by ID : "+req.params.id)
})

//Get by Id
router.get('/:id',(req,res) => {
    res.send("Get POSTS by ID : "+req.params.id)
})


module.exports=router