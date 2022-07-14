import CountryInformation from "./CountryInformation";

const CountryDisplay = ({searchData}) => {

    const showCountry = (e) => {
        console.log('showCountry');
    }

    if (searchData.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        );
    }
    else if (searchData.length > 1) {
        return (
            <div>
                
                {searchData.map(country => {
                    return(      
                        <div key={country.name}>
                            <p>{country.name}</p>
                            <button onClick={showCountry}>show</button>
                            <div style={{display: 'none'}}>
                                <CountryInformation country={country}/>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
            
        );
    }
    else if (searchData.length > 0) {
        const country = searchData[0];
        console.log(country.name);
        return (
            <div>
                <CountryInformation country={country} />
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