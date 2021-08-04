let submit = document.getElementById('button');
let input = document.querySelector('.input-value');
let cityName = document.querySelector('.city-name')
let temperature = document.querySelector('.temperature');


submit.addEventListener('click', getWeather);


async function getWeather() {
      let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0bc1bbb965b846849bf98c2ba435f069';
         try {
       const response = await fetch(apiUrl);
       apiWeather = await response.json();
       console.log(apiWeather);
    } catch(error) {
        console.log("An error occurred");
          }
       }
