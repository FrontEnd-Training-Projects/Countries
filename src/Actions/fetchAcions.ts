import { putAllCountries } from "../Reducers/allCountriesReducer";
import { API_KEY, allCountriesRequest } from "../Utils/constants";
import { CountriesData, CountryData, DataLabel, DataSorting } from "../Utils/types";
import { AppDispatch } from "../app/store"

export const fetchAllCountries = (sortingData: DataSorting | string, dataLabel: DataLabel | string) => {
    return async (dispatch: AppDispatch) => {
        if (!localStorage.getItem('allCountries')) {
            try {
                const response = await fetch(allCountriesRequest.concat("?apikey=").concat(API_KEY),
                    {
                        method: 'GET',
                        headers: {
                            "Authorization": "Bearer " + API_KEY
                        }
                    }
                );

                if (response.ok) {
                    const allCountries: CountriesData = {
                        allCountriesState: [],
                        sortingData: "",
                        label: ""
                    };
                    const data: CountryData[] = await response.json();
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
                        allCountries.allCountriesState.push(country);
                        if (allCountries.sortingData !== "") {
                            allCountries.sortingData = sortingData;
                        }
                        if (allCountries.label !== "") {
                            allCountries.label = dataLabel;
                        }
                    });
                    localStorage.setItem('allCountries', JSON.stringify(allCountries));
                    dispatch(putAllCountries(allCountries));
                }
            } catch (error) {

            }
        } else {
            dispatch(putAllCountries(JSON.parse(localStorage.getItem('allCountries')!)));
        }
    }
}