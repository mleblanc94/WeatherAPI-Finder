let submit = document.getElementById('button');
let input = document.querySelector('.input-value');
let errorMessage = document.querySelector('.error-message');
let cityName = document.querySelector('.city-name');
let temperature = document.querySelector('.temperature');


submit.addEventListener('click', getWeather);


async function getWeather() {
      let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0bc1bbb965b846849bf98c2ba435f069';
         try {
       const response = await fetch(apiUrl);
       apiWeather = await response.json();
       console.log(apiWeather);
       populateTemperature();
    } catch(error) {
        console.log("An error occurred");
          }
       }


let populateTemperature = () => {
   let initialRawTemperature = apiWeather.main.temp;
   let rawTemperature = (initialRawTemperature - 273.15) * 1.8 + 32;
   let realTemperature = (Math.round(rawTemperature));
   temperature.innerHTML = realTemperature;
}


