// 43.825386° N and -111.792824° W is lat and lon for Rexburg ID.

// Get the button elements for latitude and longitude. 
let submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', function() {
    let lat = getInputValue('latInput');
    let lon = getInputValue('lonInput');
    console.log(`The latitude is: ${lat}  The longitude is: ${lon}`);
    createRequest(lat,lon);
});

// Use the weatherUrl as a string with vairables for lat and lon so the user has control over what the request is doing.
function createRequest(lat, lon) {
    let weatherUrlInput = 
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

    fetch(weatherUrlInput)
        .then(response => response.json())
        .then(data => {
            let parsedData = parseWeatherData(data);
            // document.getElementById('weatherOutput').innerHTML = JSON.stringify(parsedData);
            createChart(parsedData);
        })
        .catch(error => console.error('Error:', error));
}

function getInputValue(input) {
    let inputVal = document.getElementById(`${input}`).value;
    return inputVal;
};

function parseWeatherData(data) {
    let parsedData = {};

    // Current weather data:
    parsedData.currentTemperature = data.current.temperature_2m;
    parsedData.currentWindSpeed = data.current.windspeed_10m;

    // Hourly forecast for the next 24 hours:
    parsedData.hourlyForecast = [];
    for (let i = 0; i < 24; i++) {
        let forecast = {};
        forecast.time = data.hourly.time[i];
        forecast.temperature = data.hourly.temperature_2m[i];
        forecast.humidity = data.hourly.relativehumidity_2m[i];
        forecast.windspeed = data.hourly.windspeed_10m[i];
        parsedData.hourlyForecast.push(forecast);
    }

    return parsedData;
}

function createChart(parsedData) {
    let ctx = document.getElementById('weatherChart').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: parsedData.hourlyForecast.map(data => data.time),
            datasets: [{
                label: 'Temperature (°C)',
                data: parsedData.hourlyForecast.map(data => data.temperature),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
    });
}