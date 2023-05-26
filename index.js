const answer = document.querySelector('#weather-answer');
const input = document.querySelector('#input-city');
const select = document.querySelector('#select');
const option = document.querySelector('option');
const btn = document.querySelector('button');
            
            /*function myPromise(){
            new Promise((resolve, reject) =>{
                setTimeout(() => {
                    h1.innerHTML = `I'm late!`
                    resolve('Promise resolved')
                },2000)
                reject('Promise rejected');
            }).then(any =>{
                h1.innerHTML = `${any}`;
            }).catch(any => {
                h1.innerHTML = `${any}`;
            })
        }
        
        btn.addEventListener('click', myPromise);*/
        
        /*function func1() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('404')
                }, 1000)
            })
        }
        
        function func2(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Resolved')
                }, 1000)
            })
        }
        
        function onSuccess(data){
            h1.innerHTML = `Success ${data}`
        }

        function onError(error){
            h1.innerHTML = `Error: ${error}`
        }
        
        function onFinaly(final){
            setTimeout(() => {
                h1.innerHTML = `The end: ${final}`
            }, 2000)
        }
        
        func1()
        .then(func2)
        .then(onSuccess)
        .catch(onError)
        .finally(onFinaly)*/
        
        function getDataWeather(loc){
            const key = 'a02156fe2d424a15ad611155231305';
            const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${loc}&days=365&aqi=no&alerts=no`;
            
            return fetch(url)
            .then(response => response.json())
            .then(data => {return data})
            .catch(error => {
                answer.innerHTML = `Error fetching weather data: ${error}`
            })
        }
        
        btn.addEventListener('click', () => {
            new Promise((resolve, reject) => {
                const loc = input.value;
                resolve(getDataWeather(loc));
            })
            .then((data) => {
                const selectedOption = select.value;
                switch(selectedOption) {
                    case 'Select': alert('Choose something');
                    break;
                    case 'Name': answer.innerHTML = `The name of this location is: ${data.location.name}`;
                    break;
                    case 'Region': answer.innerHTML = `The region of this location is: ${data.location.region}`;
                    break;
                    case 'Country': answer.innerHTML = `The country of this location is: ${data.location.country}`;
                    break;
                    case 'Latitude': answer.innerHTML = `The latitude of this location is: ${data.location.lat}`;
                    break;
                    case 'Longitude': answer.innerHTML = `The longitude of this location is: ${data.location.lon}`;
                    break;
                    case 'Timezone-id': answer.innerHTML = `The timezone of this location is: ${data.location.tz_id}`;
                    break;
                    case 'Localtime-epoch': answer.innerHTML = `The local time epoch of this location is: ${data.location.localtime_epoch}`;
                    break;
                    case 'Localtime': answer.innerHTML = `The local time of this location is: ${data.location.localtime}`;
                    break;
                    case 'Weather': answer.innerHTML = `The weather data of ${data.location.name} is: ${data.current.condition.text}`;
                    break;
                    case 'Last-update': answer.innerHTML = `The last update for ${data.location.name} is: ${data.current.last_updated}`;
                    break;
                    case 'Last-update-epoch': answer.innerHTML = `The last update epoch for ${data.location.name} is: ${data.current.last_updated_epoch}`;
                    break;
                    case 'Temp-celsius': answer.innerHTML = `The tempture in celsius of ${data.location.name} is: ${data.current.temp_c}°`;
                    break;
                    case 'Temp-fahrenheit': answer.innerHTML = `The tempture in Fahrenheit of ${data.location.name} is: ${data.current.temp_f}F`;
                    break;
                    case 'Wind-mph': answer.innerHTML = `The wind velocity of ${data.location.name} in meters per hour is: ${data.current.wind_mph}`;
                    break;
                    case 'Wind-kph': answer.innerHTML = `The wind velocity of ${data.location.name} in kilometers per hour is: ${data.current.wind_kph}`;
                    break;
                    case 'Wind-degree': answer.innerHTML = `The wind degree of ${data.location.name} is: ${data.current.wind_degree}`;
                    break;
                    case 'Wind-direction': answer.innerHTML = `The wind direction of ${data.location.name} is: ${data.current.wind_dir}`;
                    break;
                    case 'Pressure-millibar': answer.innerHTML = `The millibar pressure of ${data.location.name} is: ${data.current.pressure_mb}`;
                    break;
                    case 'Pressure-in': answer.innerHTML = `The pressure-in of ${data.location.name} is: ${data.current.pressure_in}`;
                    break;
                    case 'Humidity': answer.innerHTML = `The humidity of ${data.location.name} is: ${data.current.humidity}%`;
                    break;
                    case 'Cloud': answer.innerHTML = `The cloud update of ${data.location.name} is: ${data.current.cloud}%`;
                    break;
                    case 'Feels-like-celsius': answer.innerHTML = `The tempture sensation in celsius of ${data.location.name} is: ${data.current.feelslike_c}°`;
                    break;
                    case 'Feels-like-fahrenheit': answer.innerHTML = `The tempture sensation in fahrenheit of ${data.location.name} is: ${data.current.feelslike_f}F`;
                    break;
                    case 'Visibility-km': answer.innerHTML = `The visibility distance of ${data.location.name} in kilometers is: ${data.current.vis_km}`;
                    break;
                    case 'Visibility-miles': answer.innerHTML = `The visibility distance of ${data.location.name} in miles is: ${data.current.vis_miles}`;
                    break;
                    case 'Ultraviolet': answer.innerHTML = `The Ultraviolet messure of ${data.location.name} is: ${data.current.uv}`;
                    break;
                    case 'Gust-mph': answer.innerHTML = `The gust peak of ${data.location.name} in meters per hour is: ${data.current.gust_mph}`;
                    break;
                    case 'Gust-kph': answer.innerHTML = `The gust peak of ${data.location.name} in kilometers per hour is: ${data.current.gust_kph}`;
                    break;
                }
            })
            .catch((error) => {
                answer.innerHTML = `Error getting weather data: ${error}`;
            })
        })