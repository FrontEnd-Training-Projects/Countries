import { putAllCountries } from "../Reducers/allCountriesReducer";
import { API_KEY, allCountriesRequest, getCountriesByRegion, getCountryByCapital, getCountryByName } from "../Utils/constants";
import { CountriesData, CountryData, DataLabel, DataSorting } from "../Utils/types";
import { AppDispatch } from "../app/store"
import { chekingLocalStorage, setDataResponse } from "./functionsForActions";

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
                    const data: CountryData[] = await response.json();
                    const allCountries: CountriesData = setDataResponse(data);
                    if (allCountries.sortingData !== "") {
                        allCountries.sortingData = sortingData;
                    }
                    if (allCountries.label !== "") {
                        allCountries.label = dataLabel;
                    }
                    localStorage.setItem('allCountries', JSON.stringify(allCountries));
                    dispatch(putAllCountries(allCountries));
                }
            } catch (error) {

            }
        } else {
            dispatch(putAllCountries(JSON.parse(localStorage.getItem('allCountries')!)));
        }
    }
};

export const fetchCountryForName = (countryForName: string, allCountries: CountryData[]) => {
    return async (dispatch: AppDispatch) => {
        const res: CountryData[] = allCountries.filter(c => c.name === countryForName);
        const identifier = chekingLocalStorage('countryForName', countryForName, allCountries);
        if (res[0] || (res[0] && !localStorage.getItem('countryForName')) || (identifier !== undefined && identifier !== '')) {
            try {
                const response = await fetch(getCountryByName.concat(countryForName).concat("?apikey=").concat(API_KEY),
                    {
                        method: 'GET',
                        headers: {
                            "Authorization": "Bearer " + API_KEY
                        }
                    }
                );

                if (response.ok) {
                    const data: CountryData[] = await response.json();
                    const countryForName: CountriesData = setDataResponse(data);
                    localStorage.setItem('countryForName', JSON.stringify(countryForName));
                    dispatch(putAllCountries(countryForName));
                }
            } catch (error) {

            }
        } else {
            (identifier === undefined || identifier === '') ? localStorage.getItem('countryForName')
                : dispatch(putAllCountries(JSON.parse(localStorage.getItem('countryForName')!)));
        }
    }
};

export const fetchCountryForCapital = (capital: string, allCountries: CountryData[]) => {
    return async (dispatch: AppDispatch) => {
        const res = allCountries.filter(c => c.capital === capital);
        const identifier = chekingLocalStorage('countryForCapital', capital, allCountries);
        if (res[0] || (res[0] && !localStorage.getItem('countryForCapital')) || (identifier !== undefined && identifier !== '')) {
            try {
                const response = await fetch(getCountryByCapital.concat(capital).concat("?apikey=").concat(API_KEY),
                    {
                        method: 'GET',
                        headers: {
                            "Authorization": "Bearer " + API_KEY
                        }
                    }
                );

                if (response.ok) {
                    const data: CountryData[] = await response.json();
                    const countryForCapital: CountriesData = setDataResponse(data);
                    localStorage.setItem('countryForCapital', JSON.stringify(countryForCapital));
                    dispatch(putAllCountries(countryForCapital));
                }
            } catch (error) {

            }
        } else {
            (identifier === undefined || identifier === '') ? localStorage.getItem('countryForCapital')
                : dispatch(putAllCountries(JSON.parse(localStorage.getItem('countryForCapital')!)));
        }
    }
};

export const fetchCountrieForRegion = (region: string, allCountries: CountryData[], sortingData: DataSorting | string, dataLabel: DataLabel | string) => {
    return async (dispatch: AppDispatch) => {
        const res = allCountries.filter(c => c.region === region);
        const identifier = chekingLocalStorage('countriesForRegion', region, allCountries);
        if (res[0] || (res[0] && !localStorage.getItem('countriesForRegion')) || (identifier !== undefined && identifier !== '')) {
            try {
                const response = await fetch(getCountriesByRegion.concat(region).concat("?apikey=").concat(API_KEY),
                    {
                        method: 'GET',
                        headers: {
                            "Authorization": "Bearer " + API_KEY
                        }
                    }
                );

                if (response.ok) {
                    const data: CountryData[] = await response.json();
                    const countriesForRegion: CountriesData = setDataResponse(data);
                    if (countriesForRegion.sortingData !== "") {
                        countriesForRegion.sortingData = sortingData;
                    }
                    if (countriesForRegion.label !== "") {
                        countriesForRegion.label = dataLabel;
                    }
                    localStorage.setItem('countriesForRegion', JSON.stringify(countriesForRegion));
                    dispatch(putAllCountries(countriesForRegion));
                }
            } catch (error) {

            }
        } else {
            (identifier === undefined || identifier === '') ? localStorage.getItem('countriesForRegion')
                : dispatch(putAllCountries(JSON.parse(localStorage.getItem('countriesForRegion')!)));
        }
    }
};