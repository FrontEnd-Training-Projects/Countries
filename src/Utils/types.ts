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
    id: string,
    label: string,
    minWidth?: number,
    align?: 'right',
    format?: (value: number) => string
}