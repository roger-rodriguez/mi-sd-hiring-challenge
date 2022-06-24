export default async function fetchWeatherGeolocation({ zipCode }) {
  let data;
  let error;
  try {
    data = await fetch(
      `https://se-weather-api.herokuapp.com/api/v1/geo?zip_code=${zipCode}`
    )?.then((response) => response.json());
  } catch (e) {
    error = e;
  }
  return { data, error };
}
