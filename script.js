let submit = document.getElementById('button');
let input = document.querySelector('.input-value');
let errorMessage = document.querySelector('.error-message');
let cityName = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');
let sky = document.querySelector('.sky');
let skyPicture = document.querySelector('.skyPicture');


submit.addEventListener('click', getWeather);


async function getWeather() {
      let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0bc1bbb965b846849bf98c2ba435f069';
         try {
       const response = await fetch(apiUrl);
       apiWeather = await response.json();
       console.log(apiWeather);
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
let atmosphere = () => {
   let initialAtmosphere = apiWeather.weather[0].description;
   sky.innerHTML = initialAtmosphere;
   if (initialAtmosphere === "overcast clouds") {
      skyPicture.innerHTML = '<i class="fas fa-cloud"></i>';
   } else if (initialAtmosphere === "light rain") {
      skyPicture.innerHTML = '<i class="fas fa-cloud-rain"></i>';
   } else if (initialAtmosphere === "few clouds") {
      skyPicture.innerHTML = '<i class="fas fa-cloud-sun"></i>';
   }
   console.log(initialAtmosphere);
}



// let warningMessage = () => {
//    if (apiWeather.message === "city not found") {
//       errorMessage.innerHTML = "**Sorry, please enter a valid city name**";
//    }
// }


