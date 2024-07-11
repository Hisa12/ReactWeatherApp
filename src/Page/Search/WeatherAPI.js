import{useState}from "react";
import{useEffect}from "react";
import { URL } from "../../api";

export default function useData(search){
    const[loading, setLoading]=useState(true);
    const [weather,setWeather]=useState([]);
    const [error,setError]=useState(null);

    useEffect(()=>{
        (async()=>{
            try{
            setWeather(await getData(search));
            setLoading(false);
            }catch(err){
                setError(err);
                setLoading(false);
            }
        })();
    },[search])
    return{
        loading,weather,error,
    };
}

async function getData(search){
    const url=URL(search,"weather");
    let res = await fetch(url)
    let data = await res.json()  
    return data
}
