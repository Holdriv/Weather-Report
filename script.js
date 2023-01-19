
let weather={
    apiKey:"886244d71f4fb2b1b129a175e8aec155",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city+"&appid="+this.apiKey+"&lang=RU"
        ).then((response)=>response.json())
        .then((data)=>console.log(this.displayWeather(data)))
    },
    displayWeather: function(data){
        const {name}=data;
        const{icon, description}=data.weather[0];
        const temp=parseInt(data.main["temp_max"]-275);
        const{ humidity}=data.main;
        const{speed}=data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText="Погода в "+name;
        document.querySelector(".icon").innerText="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Влажность: "+humidity+"%";
        document.querySelector(".wind").innerText="Скорость ветра "+speed+"км в час";
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
}
document.querySelector(".search button").addEventListener("click", function(){
    weather.search()
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search()
    }
})
weather.fetchWeather("Almaty")