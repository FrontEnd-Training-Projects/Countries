import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"

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
    align?: 'right',
    format?: (value: number) => string
}

interface TooltipPayload {
    value: number
} 