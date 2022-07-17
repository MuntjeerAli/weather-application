import React, { useEffect, useState } from "react";
import "./css/styles.css";
import { FaStreetView } from "react-icons/fa";


const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect( () =>{
        const fetchApi = async () => {
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a60ccfc1be0e48cdfc44110da0ae2ef1`;
         const response = await fetch(url);
         const resJson = response.json();
         setCity(resJson.main);
        };
         fetchApi();
     },[search] );
    return(
        <>
        <div className="content">
            <div className="model">
                <div className="inputBar">
                    <input type="search" className="inputField" onChange={ (event) =>{
                        setSearch(event.target.value)
                    }}/>
                </div>
            </div>
            {!city ? (
                <p className="msg"> No Data Found</p>
            ) : (
            <div>
                <div className="info">
                    <h1 className="city">
                        <FaStreetView/> {search}
                    </h1>
                    <h1 className="weather">
                        {city.main.temp}
                    </h1>
                    <h3 className="min-max">
                        {city.temp_max} | Max: {city.temp_min}C
                    </h3>
                    </div>
                    <div></div>
            </div>
            )}
        </div>
            
        </>
    )
}

export default Weather;