

import express from 'express';
import cors from 'cors'

const PORT = 8080;


const app = express()

app.use(cors({
    origin: '',
}))




// express({
//     originWhiteList: [], //allow all orgins
// }).listen(PORT, () => {
    // })
    
// const corsAnywhere = require('cors-anywhere');

// const port = 8080

// corsAnywhere.createServer().listen(port, () => {
//     console.log('CORS Anywhere Server running on port ${port}')
// })