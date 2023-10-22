export class City {
  city: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;

  constructor(
    city: string,
    region: string,
    country: string,
    latitude: string,
    longitude: string,
  ) {
    this.city = city;
    this.region = region;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
