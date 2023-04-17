import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GetAPI()  {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const apiUrl = '/api/games';
        const axiosConfig = {
            method: 'POST',
            data: "fields name, limit 5;"
        };

        axios.post(apiUrl, axiosConfig) 
            .then(response => {
                setGames(response.data);
                console.log(games)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return null;
}

