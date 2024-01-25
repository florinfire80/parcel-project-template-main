const e=document.querySelector(".days"),t=document.getElementById("svg-container");t.querySelector("#icon-cloudy"),t.querySelector("#icon-sun"),t.querySelector("#icon-snow"),t.querySelector("#icon-clouds-and-sun"),t.querySelector("#icon-weather"),t.querySelector("#icon-sunrise"),t.querySelector("#icon-sunset"),t.querySelector("#icon-humidity"),t.querySelector("#icon-barometer"),t.querySelector("#icon-wind");const r=function(e){switch(e){case"Clouds":return"icon-cloudy";case"Clear":return"icon-sun";case"Snow":return"icon-snow";case"Clouds_sun":return"icon-clouds-and-sun";default:return"icon-weather"}}("Clouds");document.querySelector(".days"),document.querySelector(".more-btn");fetch("https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=07aed853a2b3116bf7e19dfeee63b968&units=metric").then((e=>e.json())).then((t=>{t.list.slice(0,7).forEach((t=>{const n=new Date(1e3*t.dt),s=n.getHours(),a=n.getMinutes();var c;const o=function(e,t,n,s,a){const c=document.createElement("div");return c.classList.add("weather-card"),c.innerHTML=`\n    <div class="weather-card__time">\n      <h2 class="weather-card__time-hour">${e}</h2>\n      <svg class="weather-card__time-icon">\n        <use href="#${r}"></use>\n      </svg>\n      <h1 class="weather-card__time-temp">${t}</h1>\n    </div>\n    <div class="weather-card__details">\n      <div class="weather-card__barometer">\n        <svg class="weather-card__details-icons">\n          <use href="#icon-barometer"></use>\n        </svg>\n        <p class="weather-card__details-text">${n}</p>\n      </div>\n      <div class="weather-card__humidity">\n        <svg class="weather-card__details-icons">\n          <use href="#icon-humidity"></use>\n        </svg>\n        <p class="weather-card__details-text">${s}</p>\n      </div>\n      <div class="weather-card__wind">\n        <svg class="weather-card__details-icons">\n          <use href="#icon-wind"></use>\n        </svg>\n        <p class="weather-card__details-text">${a}</p>\n      </div>\n    </div>\n  `,c}(`${s.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`,`${Math.round(t.main.temp)}°C`,`${c=t.main.pressure,(.75006375541921*c).toFixed(2)} mm`,`${t.main.humidity} %`,`${t.wind.speed} m/s`);e.appendChild(o)}))})).catch((e=>{console.error("Eroare la obținerea datelor pentru orele următoare:",e)}));
//# sourceMappingURL=index.0d1ca78f.js.map
