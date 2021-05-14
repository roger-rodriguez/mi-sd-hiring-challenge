import { convertDate } from "./utils";

// - Create a project that consume the geolocation endpoint.
// - Use the data from the geolocation endpoint to make a second call to the forecast endpoint.
// - Use the data from both endpoints to generate the creative found here.
// - Your code should be as maintainable and extensible as possible.
// - Please timebox this exercise to 2 hours.

// GeoLocation
// https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=90210

// Forecast
// https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=34.09&longitude=-104.2&date=01/24/2020
// https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=32.05&longitude=-94.1&date=01/24/2020

// Create variable to store weather forecast
let weatherForecast = {};

// Make api call to geolocation followed by api call to weather forecast
fetch('https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=11422').then(response => {
    return response.json();   
}).then(data => {
    document.getElementById('header').innerHTML = `Weather Forecast For ${data.city}, ${data.regionCode}`
    return data;
}).then(({latitude, longitude}) => {
    fetch(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=${longitude}&date=01/24/2020`).then(response => {  
    return response.json();
    }).then(weatherData => {
        weatherForecast = weatherData.daily.data;
        displayWeather(weatherForecast);
    })
})

//display weather on webpage
const displayWeather = (weatherForecast) => {
    weatherForecast.forEach(data => {
        const sun = '/sunny.104d9cd4.png';
        const raining = '/rain.536e76f6.png';
        const cloud = '/cloudy.d8afbff7.png';
        const snowing = '/snow.af099d52.png';
        const image = document.createElement('img');
        const forecastContainer = document.getElementById('forecastContainer');
        const dayContainer = document.createElement('div');
        dayContainer.setAttribute('class', 'dayContainer');
        let day;
        const upDate = convertDate(data.time);
        const weekday = new Date(upDate).getDay();
        const temperature = Math.round(data.temperatureHigh) + ' / ' + Math.round(data.temperatureLow) + ' F';
        const forecastTemp = document.createElement('p');
        const tempDesc = document.createElement('p');
        const dayOfWeek = document.createElement('h4');
        tempDesc.innerHTML = `${data.icon}`;
        forecastTemp.innerHTML = temperature;
        
        switch (weekday) {
            case 0:
                day = 'Sunday'
                break;
            case 1:
                day = 'Monday'
                break;
            case 2:
                day = 'Tuesday'
                break;
            case 3:
                day = 'Wednesday'
                break;
            case 4:
                day = 'Thursday'
                break;
            case 5:
                day = 'Friday'
                break;
            case 6:
                day = 'Saturday'
                break;
            
            default:
                day = 'Today'
                break;
            
            
        };
        dayOfWeek.innerHTML = day;
        dayContainer.appendChild(dayOfWeek);
        if (data.icon === 'sunny') {
            image.src = sun
            image.alt = 'sunny'
            dayContainer.appendChild(image)
        } else if (data.icon === 'rain') {
            image.src = raining
            image.alt = 'rain'
            dayContainer.appendChild(image)
        } else if (data.icon === 'cloudy') {
            image.src = cloud
            image.alt = 'cloudy'
            dayContainer.appendChild(image)
        } else if (data.icon === 'snow') {
            image.src = snowing
            image.alt = 'snow'
            dayContainer.appendChild(image)
        };
        dayContainer.appendChild(tempDesc);
        dayContainer.appendChild(forecastTemp);
        forecastContainer.appendChild(dayContainer);
    })
}

