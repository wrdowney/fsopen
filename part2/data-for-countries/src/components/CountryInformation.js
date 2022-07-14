import { useState, useEffect } from 'react';
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY;

const CountryInformation = ({country}) => {
    const [showInformation, setShowInformation] = useState(false);
    const [weatherData, setWeatherData] = useState();

    const toggleShowInformation = () => {
        setShowInformation(!showInformation);
    }

    console.log(country);
    console.log(country.latlng[0]);

    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${country.latlng[0]}&lon=${country.latlng[1]}&exclude={part}&appid=${api_key}`)
        .then(response => {
          console.log(response);  
        });
      }, [country.latlng]);

    if (!showInformation) {
        return(
            <div>
                <p>{country.name}</p>
                <button onClick={toggleShowInformation}>show</button>
            </div>
            
        );
    }
    else {
        return (
            <div>
                <h1>{country.name}</h1>
                <button onClick={toggleShowInformation}>hide</button>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {country.languages.map((language, i) => 
                        <li key={i}>{language.name}</li>
                    )}
                </ul>
                <img src={country.flags.png} alt='Country flag'/>
            </div>
        );
    }

}

export default CountryInformation;