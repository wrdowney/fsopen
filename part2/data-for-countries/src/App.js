import { useEffect, useState } from 'react'; 
import axios from 'axios';
import CountryDisplay from './components/CountryDisplay';

function App() {

  const [searchQuery, setSearchQuery] = useState('America');
  const [searchData, setSearchData] = useState('');

  const updateSearchCountries = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  }

  // console.log(`https://restcountries.com/v2/name/${searchQuery}`);
  useEffect(() => {
    axios
    .get(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => {
      setSearchData(response.data);  
    });
  }, [searchQuery]);


  return (
    <div>
      find countries<input value={searchQuery} onChange={updateSearchCountries} />
      <CountryDisplay searchData={searchData} />
    </div>
  );
}

export default App;
