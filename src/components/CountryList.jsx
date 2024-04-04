const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <div className="all-country-wrapper">
      <ul>
        {countries.map((country) => (          
          <li key={country.name.common}>
            {country.name.common}
            <button className='btn' type='button' onClick={() => onSelectCountry(country)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;