const apiKey = "39c024bfe56ddf1b82e0722f945b852b";
// const digla = digla
const apiCountryURL = "https://flagsapi.com/BR/flat/32.png"

const inputCity = document.getElementById("input-city")
const searchButton = document.getElementById("search-button")

// Elementos dinamicos
const cityElement = document.getElementById("city")
const weatherIcon = document.getElementById("weather-icon")
const countryElement = document.getElementById("country-element")
const umidityElement = document.getElementById("umidity")
const tempElement = document.querySelector("#temp")
const description = document.querySelector(".description")
const windElement = document.querySelector(".wind span")

// function 

const getWeatherData = async (cityValue) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    console.log(data)
    return data
}

const showWeatherData = async (cityValue) =>{
    const data =  await getWeatherData(cityValue)

    cityElement.textContent = data.name

    let tempo = parseFloat((data.main.temp))
    tempElement.innerText = tempo.toFixed(1)

    description.innerText = data.weather[0].description 
    const icon = data.weather[0].icon
    weatherIcon.setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
      );
    windElement.innerText  = data.wind.speed + "Km/h"
    umidityElement.innerText = data.main.humidity + "%"
    countryElement.setAttribute( 'src', `https://flagsapi.com/${data.sys.country}/flat/32.png`)

    const weatherData = document.querySelector("#data-weather")
    weatherData.classList.remove("hide")

}


// Events
searchButton.addEventListener("click", (e) =>{
    e.preventDefault()
    const cityValue = inputCity.value
    showWeatherData(cityValue)
    
})

inputCity.addEventListener("keyup" , (e) =>{
    if(e.code === "Enter"){
        const cityValue = e.target.value
        showWeatherData(cityValue)
    }
})