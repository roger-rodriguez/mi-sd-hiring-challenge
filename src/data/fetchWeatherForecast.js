export default async function fetchWeatherForecast({
  latitude,
  longitude,
  date,
}) {
  let data;
  let error;
  try {
    data = await fetch(
      `https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=${longitude}&date=${date}`
    )?.then((response) => response.json());
  } catch (e) {
    error = e;
  }
  return { data, error };
}
