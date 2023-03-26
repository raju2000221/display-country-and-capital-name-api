const loadcountreis = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => getdataFromApi(data))
}
const getdataFromApi = countries =>{
    const countryCounter = document.getElementById('allcountries');
    countries.forEach(country => {
        console.log(country);

        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h4>Name:${country.name.common}</h4>
            <h5>Capital:${country.capital ? country.capital[0] :'No Capital'}</h5>
            
        `
        countryCounter.appendChild(countryDiv)
    });
}
loadcountreis()