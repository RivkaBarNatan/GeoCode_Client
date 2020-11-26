export interface GeoCode {
    latitude: number;
    longitude: number;
    formattedAddress: string;
    country: string;
    city: string;
    state: string;
    zipcode: string;
    streetName: string;
    countryCode: string;
    neighbourhood: string;
    provider: string;
}