buildApp();

async function buildApp(){
    const geolocation = await getGeolocation();
    const forecastData = await getForecast();
    let forecast = forecastData.daily.data[0];
    const h2 = document.createElement('h2');
    h2.textContent = 'Weather forecast for ' + geolocation.city;
    const app = document.getElementById('app');
    app.prepend(h2);

    let tab = 
        `<tr>
        <th colspan="2" style="background-color: dodgerblue;">Today</th>
        </tr>
        <tr>
        <td class="material-icons">${forecast.icon}</td>
        <td>${forecast.summary}</td>
        </tr>`;
    document.getElementById('forecast').innerHTML = tab;
}

async function getGeolocation(){
    const basepath = 'https://se-weather-api.herokuapp.com/api/v1/geo';
    const params = new URLSearchParams({
        zip_code: '33186'
    });

    const response = await fetch(`${basepath}?${params}`);
    let geolocation = response.json();
    return geolocation;
}

async function getForecast(){
    const geolocation = await getGeolocation();
    const basepath = 'https://se-weather-api.herokuapp.com/api/v1/forecast';
    const params = new URLSearchParams({    
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
        date: new Date
    });
    const response = await fetch(`${basepath}?${params}`);
    let forecast = response.json();
    return forecast;
}