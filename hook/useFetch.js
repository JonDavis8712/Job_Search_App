import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': '70cb3aa931mshecdb14c2ac90d65p16fc6cjsn71baa22ca19f',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: { ...query }, 
};

const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    } catch (error) {
        console.error('Eror', error);
        setError(error);
        alert('There is an error with your request');
    } finally {
        setIsLoading(false);
    }
}
useEffect(() => {
  fetchData();
}, [])

const refetch = () => {
    setIsLoading(true);
    fetchData();
}
return { data, isloading, error, refetch };

}


export default useFetch;