import GeoWeatherForecast from './GeoWeatherForecast';
import './GeoWeatherForecast/WeatherForecast.module.scss';

window.addEventListener('DOMContentLoaded', async (event) => {
  document.querySelector('#app').innerHTML = await GeoWeatherForecast();
});
