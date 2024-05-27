
const input = document.getElementById("input");
const btn = document.getElementById("show");
const divBlock = document.querySelector(".w-card")

const url='https://api.openweathermap.org/data/2.5/weather?q=';
const aoiKey="f631ea87daddf959f8d7a12c30009e4c";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getWeather(cityName){
    const res=await fetch(url + cityName + '&appid=' + aoiKey);
    const data=await res.json()
    console.log(data);
    showInfo(data);
}

btn.onclick=()=>{
    getWeather(input.value);
};

function showInfo(obj){

    divBlock.innerHTML = `
      <div class="w-card">
        <h3>${obj.name}</h3>
        <div class="temp">
          <h1>${Math.round(obj.main.temp-273.15)}</h1>
          <div>
            <img src="./images/rain.png" alt="icon">
          </div>
        </div>
        <p>${obj}</p>
        <p>Ветер <span>${Math.round(obj.wind.speed)}км/ч</span></p>
        <p>Влажность <span>${Math.round(obj.main.humidity)}%</span></p>
      </div>`
}

