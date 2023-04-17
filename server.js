

import express from 'express';
import cors from 'cors'

const PORT = 8080;


const app = express()

app.use(cors({
    origin: 'https://api.igdb.com/v4',
}))

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})


// express({
//     originWhiteList: [], //allow all orgins
// }).listen(PORT, () => {
    // })
    
// const corsAnywhere = require('cors-anywhere');

// const port = 8080

// corsAnywhere.createServer().listen(port, () => {
//     console.log('CORS Anywhere Server running on port ${port}')
// })