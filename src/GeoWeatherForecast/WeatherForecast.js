import { convertDate, getToday } from '../utils';

import cloudyIcon from '../../img/cloudy.png';
import rainIcon from '../../img/rain.png';
import snowIcon from '../../img/snow.png';
import sunnyIcon from '../../img/sunny.png';

import fetchWeatherForecast from '../data/fetchWeatherForecast';
import './WeatherForecast.module.scss';

const icons = {
  cloudy: cloudyIcon,
  rain: rainIcon,
  snow: snowIcon,
  sunny: sunnyIcon
};

function render(data) {
  return data
    .map((item) => {
      const { icon, time, summary, temperatureMin, temperatureMax } = item;

      return `
      <div class="weather-forecast-item">
        <div>${convertDate(time)}</div>
        <div>
          <img src="${icons[icon]}"/>
          <div>
            <div>${summary}</div>
            <div>${temperatureMin}/${temperatureMax}</div>
          </div>
        </div>
      </div>`;
    })
    .join('');
}

export default async function WeatherForecast(geoData) {
  const { data } = await fetchWeatherForecast({
    ...geoData,
    date: getToday()
  });

  return `<div class="weather-forecast-container">${render(
    data?.daily?.data || []
  )}</div>`;
}
