// 43.825386° N and -111.792824° W is lat and lon for Rexburg ID.

// Get the button elements for latitude and longitude. 
let submitButton = document.querySelector('#submitButton');

console.log(`The following coordinates are some test cases:\n\
\n43.8231 -111.7924 (Rexburg) (Variable conditions, but you should be able to see them)\
\n2.2883 111.8313 (Cibu, Malaysia) (Usually hot and humid.)\
\n82.8628 135 (Antartica) (Always freezing cold, usually windy, sometimes humid.)\
\n48.1181 123.4307 (Pacific Northwest) (Usually just humid with mild temp.)`);

submitButton.addEventListener('click', function() {
    let lat = getInputValue('latInput');
    let lon = getInputValue('lonInput');
    console.log(`The latitude is: ${lat}  The longitude is: ${lon}`);
    createRequest(lat,lon);
});

// Use the weatherUrl as a template literal with vairables for lat and lon so the user has control over what the request is doing.
function createRequest(lat, lon) {
    let weatherUrlInput = 
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    fetch(weatherUrlInput)
        .then(response => response.json())
        .then(data => {
            // Assign the raw data as a parameter to return parsed data after it goes through the function.
            let parsedData = parseWeatherData(data);
            // Call this function to parse the json file that the API returns. 
            createChart(parsedData);
            // call display Icons when the request is made and data is parsed. 
            displayIcons(parsedData);
        })
        .catch(error => console.error('Error:', error));
}
// Function to get the input from the user. This will be called twice for both lat. and lon.
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
    // Ignore the unused variable chart as it is part of the module syntax. 
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: parsedData.hourlyForecast.map(data => data.time),
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: parsedData.hourlyForecast.map(data => data.temperature),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Humidity (%)',
                    data: parsedData.hourlyForecast.map(data => data.humidity),
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    tension: 0.1
                },
                {
                    label: 'Wind Speed (m/s)',
                    data: parsedData.hourlyForecast.map(data => data.windspeed),
                    fill: false,
                    borderColor: 'rgb(54, 162, 235)',
                    tension: 0.1
                }
            ]
        },
    });
}

// Function to show icons based on the 24 hour weather report for extreme heat, cold, humidity, and/or high wind. 
function displayIcons(parsedData) {

    // Show the thermometer icon if any temperature exceeds 20 degrees Celsius
    let heatIcon = document.getElementById('heatIcon');
    let chillIcon = document.getElementById('chillIcon');
    if (parsedData.hourlyForecast.some(data => data.temperature > 20)) {
        heatIcon.style.display = 'block';
        chillIcon.style.display = 'none';
    }
    else if (parsedData.hourlyForecast.some(data => data.temperature < -5)) {
        chillIcon.style.display = 'block';
        heatIcon.style.display = 'none';
    }
    else {
        heatIcon.style.display = 'none';
        chillIcon.style.display = 'none';
    }
    
    let wetIcon = document.getElementById('wetIcon');
    if (parsedData.hourlyForecast.some(data => data.humidity >= 60)) {
        wetIcon.style.display = 'block';
    }
    else {
        wetIcon.style.display = 'none';
    }

    let windIcon = document.getElementById('windIcon');
    if (parsedData.hourlyForecast.some(data => data.windspeed >= 16)) {
        windIcon.style.display = 'block';
    }
    else {
        windIcon.style.display = 'none';
    }

}