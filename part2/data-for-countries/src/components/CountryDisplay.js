const CountryDisplay = ({searchData}) => {
    if (searchData.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        );
    }
    else if (searchData.length > 1) {
        return (
            <div>
                {searchData.map(country => 
                    <p key={country.name}>{country.name}</p>
                )}
            </div>
            
        );
    }
    else if (searchData.length > 0) {
        const country = searchData[0];
        console.log(country.name);
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
    else {
        return (
            <p>No countries found matching your search</p>
        );
    }
};

export default CountryDisplay;