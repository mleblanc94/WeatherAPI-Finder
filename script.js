// Setting Variables

let body = document.querySelector('body');
let reset = document.getElementById('reset');
let submit = document.getElementById('button');
let input = document.querySelector('.input-value');
let displayBox = document.querySelector('.display-box');
let errorMessage = document.querySelector('.error-message');
let cityName = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');
let sky = document.querySelector('.sky');
let skyPicture = document.querySelector('.skyPicture');

// Fetching the API

async function getWeather() {
      let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0bc1bbb965b846849bf98c2ba435f069';
         try {
       const response = await fetch(apiUrl);
       apiWeather = await response.json();
       console.log(apiWeather);
       displayBox.style.display = 'flex';
       populateTemperature();
       atmosphere();
      //  warningMessage();
    } catch(error) {
        console.log("an error has occurred");
          }
       }

// Populating the Temperature on the main page

let populateTemperature = () => {
   let initialRawTemperature = apiWeather.main.temp;
   let rawTemperature = (initialRawTemperature - 273.15) * 1.8 + 32;
   let realTemperature = (Math.round(rawTemperature));
   temperature.innerHTML = realTemperature+"<span>&#176;</span>";
}

// Populating the Atmoshphere on the main page (Sunny, Cloudy, Overcast, etc.)
// Populating the background images that come with whatever the weather condition is in that given city.

let atmosphere = () => {
   let initialAtmosphere = apiWeather.weather[0].description;
   sky.innerHTML = initialAtmosphere;
   if (initialAtmosphere === "overcast clouds") {
      skyPicture.innerHTML = '<i class="fas fa-cloud"></i>';
      body.style.background = 'url(cloudy.webp) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "light rain") {
      skyPicture.innerHTML = '<i class="fas fa-cloud-rain"></i>';
      body.style.background = 'url(rainClouds.webp) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "few clouds") {
      skyPicture.innerHTML = '<i class="fas fa-cloud-sun"></i>';
      body.style.background = 'url(partlyCloudy.jpg) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "clear sky") {
      skyPicture.innerHTML = '<i class="fas fa-sun"></i>';
      body.style.background = 'url(clearSkies.jpg) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "moderate rain") {
      skyPicture.innerHTML = '<i class="fas fa-cloud-rain"></i>';
      body.style.background = 'url(rainClouds.webp) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "scattered clouds") {
      skyPicture.innerHTML = '<i class="fas fa-cloud""></i>';
      body.style.background = 'url(partlyCloudy.jpg) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "haze") {
      skyPicture.innerHTML = '<i class="fas fa-smog"></i>';
      body.style.background = 'url(haze.jpg) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "broken clouds") {
      skyPicture.innerHTML = '<i class="fas fa-cloud"></i>';
      body.style.background = 'url(partlyCloudy.jpg) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "mist") {
      skyPicture.innerHTML = '<i class="fas fa-cloud"></i>';
      body.style.background = 'url(mist.webp) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   } else if (initialAtmosphere === "very heavy rain") {
      skyPicture.innerHTML = '<i class="fas fa-cloud-rain"></i>';
      body.style.background = 'url(rainClouds.webp) no-repeat center center fixed';
      body.style.backgroundSize = 'cover';
   }
   console.log(initialAtmosphere);
}

// Reset Button

let resetButton = () => {
   input.value = "";
   displayBox.style.display = 'none';
   body.style.background = 'url(skyimage.jpg) no-repeat center center fixed';
   body.style.backgroundSize = 'cover';
}

// Event Listeners

reset.addEventListener('click', resetButton);
submit.addEventListener('click', getWeather);



// let warningMessage = () => {
//    if (apiWeather.message === "city not found") {
//       errorMessage.innerHTML = "**Sorry, please enter a valid city name**";
//    }
// }


