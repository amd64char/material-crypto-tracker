import { useState, useEffect } from "react";

export default function FetchData(endpointUrl, endpointHeaders, endpointMethod) {

    // set state to hold onto data from fetch
    const [data, setData] = useState([]);

    async function getData() {
        // await our fetch
        const response = await fetch(endpointUrl, {
            method: endpointMethod,
            headers: endpointHeaders
        });
        
        // await our data
        const data = await response.json();
        console.log(data.data, 'await response.data');
        
        // set state
        setData(data.data);
    }

    // lifecycle method
    useEffect(() => {
        getData();
    }, []);

    // return our data
    return data;
}