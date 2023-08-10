import { CountriesData, CountryData } from "../Utils/types";

export const setDataResponse = (data: CountryData[]): CountriesData => {
    const dataResponse: CountriesData = {
        allCountriesState: [],
        sortingData: "",
        label: ""
    };
    Object.entries(data).forEach(c => {
        const country: CountryData = {
            name: c[1].name,
            official_name: c[1].official_name,
            alpha3Code: c[1].alpha3Code,
            numericCode: c[1].numericCode,
            callingCode: c[1].callingCode,
            capital: c[1].capital,
            region: c[1].region,
            subregion: c[1].subregion,
            population: c[1].population,
            timezones: c[1].timezones,
            flag: c[1].flag
        }
        dataResponse.allCountriesState.push(country);
    });
    return dataResponse;
};

export const chekingLocalStorage = (storageItem: string, countryItem: string, allCountries: CountryData[]): string | undefined => {
    let identifier = '';
    if (localStorage.getItem(storageItem.toString())) {
        const data: CountriesData = JSON.parse(localStorage.getItem('countryForCapital')!);
        if (toIdentifyParameter(countryItem, allCountries)) {
            const param = toIdentifyParameter!(countryItem, allCountries) as keyof typeof allCountries[0];
            if (param) {
                const res: CountryData[] = data.allCountriesState.filter(country => country[param] === countryItem);
                identifier = res[0] && res[0].name;
            }
        }
    }
    return identifier;
};

const toIdentifyParameter = (countryItem: string, allCountries: CountryData[]): string |  undefined => {
    const name = 'name' as keyof typeof allCountries[0];
    const capital = 'capital' as keyof typeof allCountries[0];
    const res1 = allCountries.filter(country => country.name === countryItem);
    const res2 = allCountries.filter(country => country.capital === countryItem);
    return res1.length === 0 ? capital : res2.length === 0 ? name : countryItem;
};