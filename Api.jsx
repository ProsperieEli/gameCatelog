import axios from 'axios'
import { useState } from 'react'

export default function GetAPI()  {
    const [games, setGames] = useState({})

    const apiUrl = 'https://api.igdb.com/v4/games';
    const proxyUrl = 'http://127.0.0.1:5174/games';
    const url = `${proxyUrl}/${apiUrl}`
    const axiosConfig = {
        method: 'POST',
        headers: {
            'Client-ID': 'pcsvbav1k1g4x68fqj1nu4efnywxkw',
            Authorization: 'Bearer soosh4m1v5bylb7o6j6v3rpo0g0y3k',
            // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5174/games',
            // 'Content-Type': JSON
        },
        data: "fields name, limit 5;"
    }
    //Fetch your API information
axios.post(url, axiosConfig)
.then(response => consoloe.log(response.data))
.catch(error => console.error(error))

return null;
}
