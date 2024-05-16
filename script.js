document.getElementById('searchBtn').addEventListener('click', function() {
    var countryInput = document.getElementById('countryInput').value.trim();
    if (countryInput !== '') {
      fetchCountryInfo(countryInput);
    } else {
      alert('Please enter a country name.');
    }
  });
  
  function fetchCountryInfo(countryName) {
    fetch('https://restcountries.com/v3.1/name/' + countryName)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          displayCountryInfo(data[0]);
        } else {
          alert('Country not found.');
        }
      })
      .catch(error => {
        console.error('Error fetching country info:', error);
        alert('Error fetching country info. Please try again later.');
      });
  }
  
  function displayCountryInfo(country) {
    var countryInfoDiv = document.getElementById('countryInfo');
    countryInfoDiv.innerHTML = `
    <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
      <h2>${country.name.common}</h2>
      <p>Capital: ${country.capital}</p>
      <p>Population: ${country.population}</p>
      <p>Region: ${country.region}</p>
      <p>Subregion: ${country.subregion}</p>
      
    `;
  }