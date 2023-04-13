

import express from 'express';

const PORT = 8080;

express({
    originWhiteList: [], //allow all orgins
}).listen(PORT, () => {
    console.log('CORS Anywhere server running on port ${PORT}')
})

// const corsAnywhere = require('cors-anywhere');

// const port = 8080

// corsAnywhere.createServer().listen(port, () => {
//     console.log('CORS Anywhere Server running on port ${port}')
// })