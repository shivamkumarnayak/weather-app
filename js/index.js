let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconFile;



window.addEventListener("load",()=>{
    let long;
    let lat;

     //geolocation object allow to provide the location to the web application.
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            long = position.coords.longitude;
            lat= position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/" // this is using for fix the problem of api(server not found)

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid= Enter your API Key`;

            fetch(api)
            .then((response) =>{
                return response.json();

            })
            .then(data =>{
                 const{name} = data;
                 const {feels_like} = data.main;
                 const {id, main} = data.weather[0];
                 loc.textContent = name;
                 climate.textContent = main;
                 tempValue.textContent = Math.round(feels_like-273);
                if(id<250){
                    tempIcon.src = './images/storm.png'
                }
                else if(id<350){
                    tempIcon.src = './images/drizzle.png'
                }
                else if(id<550){
                    tempIcon.src = '/images/rain.png'
                }
                else if(id<650){
                    tempIcon.src = './images/snow.png'
                }
                else if(id <800){
                    tempIcon.src = '/images/atmosphere.png'
                }
                else if(id == 800){
                    iconFile.src = './images/clear.png'
                }
                else if(id>800){
                    tempIcon.src = './images/cloud.png'
                }

                console.log(data);

            })
        })
    }
})


