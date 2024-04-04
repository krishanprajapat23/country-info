// App.js
import React, { useState, useEffect } from 'react';
import countriesService from './services/countries';
import Filter from './components/Filter';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading


  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const value = (event.target.value).toLowerCase();
    setSearchQuery(value);
    setSelectedCountry(null);
    setErrorMessage(null);
  };


  useEffect(() => {
    countriesService
      .getAll()
      .then(response =>{
        setCountries(response);
        setIsLoading(false); // Set loading to false after data is fetched
        // console.log(countries);
        console.log(selectedCountry);
      })
      .catch(error => {
        setIsLoading(false); // Set loading to false in case of error
        console.error(error);
      });
  }, [])




  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery)
  );
  
  const onSelectCountry = (country)=>{
    setSelectedCountry(country);
  }
  
  const backBtn = ()=>{
    if(!(selectedCountry === null)){
      setSelectedCountry(null);
      setSearchQuery(''); 
    }
  }

  return (
    <div>
      <div className="app-header">
        <h1>Country Info</h1>
        <Filter
          searchQuery={searchQuery}
          onSearchInputChange={handleSearchInputChange}
        />
      </div>
        {isLoading ? ( // Check loading state
          <p className='text-center'>Loading...</p>
          ) : selectedCountry ? (
            <CountryDetails country={selectedCountry} backBtn={backBtn} />
          ) : (
            <CountryList
              countries={filteredCountries}
              onSelectCountry={onSelectCountry}
            />
        )}
    </div>
  );
};

export default App;
