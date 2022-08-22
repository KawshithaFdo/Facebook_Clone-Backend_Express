const express = require('express')
const router = express.Router()


//Get All
router.get('/',(req,res) => {
    res.send('Get All User')
})

//Add
router.post('/',(req,res) => {
    res.send("Post User")
})

//Update
router.put('/',(req,res) => {
    res.send("Put User")
})

//Delete
router.delete('/:id',(req,res) => {
    res.send("Delete User by ID : "+req.params.id)
})

//Get by Id
router.get('/:id',(req,res) => {
    res.send("Get User by ID : "+req.params.id)
})


module.exports=router