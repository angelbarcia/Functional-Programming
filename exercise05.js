const countries = require("../resources/countries.json");

// find number of countries in each continent
const countriesPerContinent = countries
    .reduce((acc, country) => {
           if(country.continent){
            const continentName = country.continent;
        if (!acc[continentName]) {
                acc[continentName] = [];
            }
            acc[continentName].push(country.name);}
            return acc;
        },{});
        
       
        console.log(countriesPerContinent);