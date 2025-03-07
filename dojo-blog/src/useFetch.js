import {useEffect, useState} from 'react';

const useFetch = ((url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw new Error('This particular resource could not be fetched');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch((err) =>{
                setPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]) //[name]

    return {data: data, pending: pending, error: error};
})

export default useFetch;