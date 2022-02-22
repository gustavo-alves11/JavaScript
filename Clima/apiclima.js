var city= document.getElementById("city");
var temp = document.getElementById("temp");
var cityname = document.getElementById("cityname");
var descr = document.getElementById("descr");
document.getElementById("button").addEventListener("click", api);  

function api(){
    var city= document.getElementById("city");
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&lang=pt_br&units=metric&appid=87232171faa2c6f321b6fa40618c9289')
    .then(resposta => resposta.json() )
    // .then((data) => data.temperature.value )
    .then(data =>{
        var nameValue = data['name'];
        var tempValue = data['main']['temp'] 
        var descrValue =  data['weather'][0]['description'];
        
        temp.innerHTML = tempValue+'°C';
        cityname.innerHTML =nameValue;
        descr.innerHTML = descrValue;
        
    })

}