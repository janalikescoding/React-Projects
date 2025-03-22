import {useEffect, useState} from 'react';

const useFetch = ((url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal}) //{signal: abortCont.signal} links an instance of AbortController to the component which is calling useFetch
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
                if(err.name === 'AbortError'){
                    //console.log('fetch aborted');
                } else{
                    setPending(false);
                    setError(err.message);
                }
            })
        }, 0);
        return () => {abortCont.abort();}
    }, [url]) //[name]

    return {data: data, pending: pending, error: error};
})

export default useFetch;