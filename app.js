function fetchData(){
var cityName = document.getElementById('city').value;

if(cityName === ""){
    alert('Enter city');
}

var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=cb4bffffb1a6b5c31d7ad4bac074d108"

fetch(url)
.then(response => response.json())
.then(data => {
    var respCode = data['cod']
    if(respCode === '404'){
        alert('City not found')
    } else{
        var cityTemp = data['main']['temp']
        var tempIcon = data['weather']['0']['icon']
        console.log(tempIcon)
        var iconUrl = "http://openweathermap.org/img/wn/"+tempIcon+'@2x.png'
        document.getElementById('result').innerHTML = `<img src="`+iconUrl+`" alt="this is image">` + `<br>` + `<h2> Temperature of ` + cityName + ` is ` + cityTemp + `</h2>`;
    }
})
}