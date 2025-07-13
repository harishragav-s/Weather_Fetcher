async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerText = "Please enter a city name.";
    return;
  }

  try {
    const apiKey = '37d9354797104abf915141846251307';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const location = data.location.name + ", " + data.location.country;

    resultDiv.innerHTML = `
      <strong>${location}</strong><br>
      Temperature: ${temp} °C<br>
      Condition: ${condition}
    `;
  } catch (error) {
    resultDiv.innerText = `Error: ${error.message}`;
  }
}
