import { ReactElement } from "react"

export interface CountryFlags {
    small: string,
    medium: string,
    large: string
}

export interface CountryData {
    name: string,
    official_name: string,
    alpha3Code: string,
    numericCode: string,
    callingCode: string,
    capital: string,
    region: string,
    subregion: string,
    population: number,
    timezones: Array<string>,
    flag: CountryFlags
}

export interface CountryColumn {
    id: 'name' | 'official_name' | 'alpha3Code' | 'numericCode' | 'callingCode' | 'capital' | 'region' | 'subregion' | 'population' | 'timezones' | 'flag',
    label: string,
    minWidth?: number,
    align?: 'right' | 'left' | 'center',
    formatUtc?: (value: Array<string>) => ReactElement,
    formatFlag?: (value: CountryFlags) => ReactElement
}

export interface DataChart {
	name: string,
	population: string | number,
	color?: string
}

export interface TooltipData {
    payload?: Array<TooltipPayload>,
    active?: boolean,
    label?: string
}

interface TooltipPayload {
    value: number
} 

export interface CountriesData {
    allCountriesState: CountryData[],
    sortingData: DataSorting | string,
    label: DataLabel | string,
} 

export interface DataSorting {
    dataSorting: string
}

export interface DataLabel {
    label: string
}