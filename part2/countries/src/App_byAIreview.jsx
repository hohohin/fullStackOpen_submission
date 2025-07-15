import { useEffect, useState } from 'react';
import server from './server';
import TheCountry from './components/TheCountry';
import Results from './components/Results';

function App_better() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [countryToShow, setCountryToShow] = useState(null);

  useEffect(() => {
    server.getAll().then((infos) => {
      setCountries(infos);
    });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCountryToShow(null);
  };

  const handleShowCountry = (country) => {
    setCountryToShow(country);
  };

  const matchedCountries =
    search && countries
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const displayContent = () => {
    if (countryToShow) {
      return <TheCountry country={countryToShow} />;
    }
    if (search) {
      return (
        <Results countries={matchedCountries} onShowClick={handleShowCountry} />
      );
    }
    return <p>begin your search🔍</p>;
  };

  return (
    <>
      <h1>Countries</h1>
      <div className="searchBox">
        find countries <input value={search} onChange={handleSearch}></input>
      </div>
      {displayContent()}
    </>
  );
}

export default App_better;
