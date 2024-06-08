import countries from "world-countries";

const formattedCountries = countries.map((country) => {
    return {
        value: country.cca2,
        label: country.name.common,
        flag: country.flag,
        latlng: country.latlng,
        region: country.region,
        callingCode: ( country.idd.root + country.idd.suffixes[0] )
    }
})

const useCountries = () => {
    const getAll = () => {
        
        
        return formattedCountries;
        
        }

    return {
        getAll
    }
}

export default useCountries;