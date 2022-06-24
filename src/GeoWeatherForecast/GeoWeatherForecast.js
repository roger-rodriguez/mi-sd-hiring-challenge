import { convertDate } from '../utils';

import fetchGeolocation from '../data/fetchGeolocation';
import WeatherForecast from './WeatherForecast';

export default async function GeoWeatherForecast() {
  const { zip_code: zipCode = '90210' } =
    Object.fromEntries(new URLSearchParams(location.search)) || {};
  const { data } = await fetchGeolocation({ zipCode });
  const { city } = data || {};
  const weatherForecast = await WeatherForecast(data);

  return `<div><h1>Weather forecast for ${city}</h1>
    ${weatherForecast}</div>`;
}
