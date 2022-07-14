import { useState } from 'react';

const CountryInformation = ({country}) => {
    const [showInformation, setShowInformation] = useState(false);

    const toggleShowInformation = () => {
        setShowInformation(!showInformation);
    }

    if (!showInformation) {
        return(
            <div>
                <p>{country.name}</p>
                <button onClick={toggleShowInformation}>show</button>
            </div>
            
        );
    }
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

export default CountryInformation;