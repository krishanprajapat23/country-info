


const CountryDetails = ({ country, backBtn }) => {
  // <ul>
  //   {country.languages.map((language) => (
  //     <li key={language}>{language}</li>
  //   ))}
  // </ul>
  console.log(country);
  return (
    <div className="card country-card">
      <div className="card-header">
        {
          (country.flags.png) ? (
            <img width='300' src={country.flags.png} alt={country.flags.alt} />
            ) : (<span role="img" aria-label="flag">{country.flag}</span>)
        }
        <div>
          <button className='back-btn btn btn-sec' type='button' onClick={backBtn}>Back</button>
          <h2>{country.name.common}</h2>
          <p><em><strong>Official Name: </strong> {country.name.official}</em></p>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area} sq km</p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p> 
          <p><a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps Link</a></p>
          </div>
          </div>
      <div className="card-body">
        <p>Population: {country.population.toLocaleString()}</p>
       
        <div>
          <h4>Currencies:</h4>
          <ul>
            {/* Map over the keys array and render each currency */}
            {Object.keys(country.currencies).map((currencyKey) => (
              <li key={currencyKey}>
                {currencyKey}: {country.currencies[currencyKey].name} ({country.currencies[currencyKey].symbol})
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Languages:</h4>
          <ul>
            {Object.keys(country.languages).map((lang)=> (
              <li key={lang}>
                {lang} : {country.languages[lang]}
              </li>
            ))}
          </ul>
        </div>
        <p>Member of United Nations: {`${country.unMember ? 'Yes' : 'No'}`} </p>
        <p>Timezones: {country.timezones.toLocaleString()} </p>
        <p>Week Day starts with: {country.startOfWeek} </p>
      </div>
    </div>
  );
};

export default CountryDetails;