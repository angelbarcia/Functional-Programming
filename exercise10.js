const countries = require("../resources/countries.json");

// find number of cities in each continent
const citiesPerContinent = countries
    .reduce((acc, country) => {
        if(country.continent){
         const continentName = country.continent;
     if (!acc[continentName]) {
             acc[continentName] = [];
         }
         acc[continentName].push(country.cities.map(cities => cities.name));}
         return acc;
     },{});
    
     console.log(citiesPerContinent);