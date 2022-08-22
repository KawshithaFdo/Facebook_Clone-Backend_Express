const express = require('express')
 const user=require('./routes/user')

const app = express()
const port = 5000
//
// const url = 'mongodb://localhost/facebookclone'
//
// mongoose.connect(url, { useNewUrlParser: true })
// const con = mongoose.connection
//
// con.on("open", () => {
//     console.log('MongoDB connected!');
// })

app.use(express.json())

app.use('/user', user)


app.get('/', (req, res) => {
    res.send('get req came for / route')
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})