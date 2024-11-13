let cityInput = document.getElementById('cityName');

let searchBtn = document.getElementById('searchBtn');

const api_key = '2049d791065a4efcadf190123241111';
const baseURL = 'http://api.weatherapi.com/v1/current.json?key=${api_key}&q=';


let cardContainer = document.querySelector('.card-cotainer')

// console.log(cardContainer);

function weatherDetails(){
    let cityName = cityInput.value.trim();
    cityInput = '';
    let URL = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${cityName}`;

    fetch(URL).then(res => res.json()).then(data => {
        // console.log(data);

        cardContainer.innerHTML = `<div class="card">
            <div class="city-name-cotainer">
                <h2>${data.location.name}</h2>
                <p>${data.location.region} ${data.location.country}</p>
                <p>${data.current.last_updated}</p>
            </div>

            <div class="weather-details" >
                <h1 style="font-size: 60px;">${data.current.temp_c}&deg;C</h1>

            </div>

            <div class="card-footer">
                <div class="small-card">
                    <img src="./components/humidity.svg" alt="" id="humid" height="25px" width="25px">
                    <p>Humidity</p>
                    <p class="humidityValue">${data.current.humidity}</p>
                </div>
                <div class="small-card">
                    <img src="./components/wind.svg" alt="" id="wind" height="25px" width="25px">
                    <p>Wind</p>
                    <p class="windValue">${data.current.wind_kph} KMPH</p>
                </div>
                <div class="small-card">
                    <img src="./components/feel.svg" alt="" id="feel" height="25px" width="25px">
                    <p>Feel</p>
                    <p class="feelValue">${data.current.feelslike_c}</p>
                </div>
                <div class="small-card">
                    <img src="./components/feel.svg" alt="" id="pressure" height="25px" width="25px">
                    <p>Pressure</p>
                    <p class="pressureValue">${data.current.pressure_mb}</p>
                </div>
                <div class="small-card">
                    <img src="./components/feel.svg" alt="" id="heatIndex" height="25px" width="25px">
                    <p>Heat Index</p>
                    <p class="heatValue">${data.current.heatindex_c}</p>
                </div>
                
            </div>
        </div>`
    }).catch(() => {
        alert(`Failed to fetch ${cityName}`);
    });
}


searchBtn.addEventListener('click', weatherDetails);