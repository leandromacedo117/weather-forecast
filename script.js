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
const tempElement = document.querySelector("#temperadura span")
const description = document.querySelector(".description")
const windElement = document.querySelector(".wind span")

// function 

const getWeatherData = async(cityValue) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    console.log(data)
}

const showWeatherData = (cityValue) =>{
    getWeatherData(cityValue)
}


// Events
searchButton.addEventListener("click", (e) =>{
    e.preventDefault()
    const cityValue = inputCity.value
    showWeatherData(cityValue)
    
})
