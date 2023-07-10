var gopiweatherchart;
function getWeatherData(city) {
  fetch(
   'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=a586efad471b13658b61ebc115700984'
  )
  const icon =
  "https://openweathermap.org" + data.weather[0].icon + "@2x.png";