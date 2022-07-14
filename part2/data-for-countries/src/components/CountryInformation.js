const CountryInformation = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
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