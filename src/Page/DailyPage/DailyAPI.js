import{useState,useEffect}from "react";
import { AgGridReact } from "ag-grid-react";
import  'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Box,
} from "@chakra-ui/react";

const tempC=p=>{
    return <>{p.value}°C</>
}
const rainP=(p)=>{
    return<>{p.value}%</>
}

const iconURL=(p)=>{

    const url=`https:${p.value}`;
    console.log("icon",url)
    return<Box m={'-3'}><img  src={url} alt="weather icon"/></Box>
}

export default function DailyData(){
    const[rowData,setRowData]=useState([])

    const columns=[
        {headerName: "Date", field: "date"},
        {headerName: "Condition",field:"condition",cellRenderer:iconURL},
        {headerName: "Temp", field: "temp", cellRenderer:tempC},
        {headerName: "Rain", field: "rain", cellRenderer:tempC},
        {headerName: "Humidity", field: "humidity", cellRenderer:rainP},
    ]

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/forecast.json?key=8bf78f7468c34c6b9b2125815233004&q=brisbane&days=8')
        .then(res=>res.json())
        .then(response=>response.forecast)
        .then(forecast=>forecast.forecastday)
        .then(forecastday=>
            forecastday.map(item=>{ 
                return{
                    date:item.date,
                    condition:item.day.condition.icon,
                    temp:item.day.avgtemp_c,
                    rain:item.day.daily_chance_of_rain,
                    humidity:item.day.avghumidity,
                }
            }))
            .then(items=>setRowData(items))
    },[]);
    
    return(
        <>
            <Box className='ag-theme-alpine'
                style={{
                    height:"410px",
                    width:"1000px"
                    }}>

                    <AgGridReact
                    columnDefs={columns}
                    rowData={rowData}
                    gridAutoHeight={800}
                    pagination={false}
                    />
            </Box>
        </>
      
    

    )


}
