$(document).ready(function(){
      var url_ip = "http://freegeoip.net/json/";
      var tempSwap = true;
      var api_key = "67d90121c5f9f97db9b1ca8991e5ae93";
      // fahrenheit
      $.getJSON(url_ip, function(data){
        console.log(data);
        var fWeather = `http://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country_code}&appid=${api_key}&units=imperial`;

        $.getJSON(fWeather, function(weather){
         console.log(weather);
         var fTemp = `${Math.ceil(weather.main.temp)}`;
         var fTempMax = `${Math.ceil(weather.main.temp_max)}`;
         var fTempMin = `${Math.ceil(weather.main.temp_min)}`;
         var fWindSpeed = `${weather.wind.speed.toFixed(2)} mph`;

         var cTemp = `${Math.ceil((weather.main.temp - 32) * 5/9)}  &deg;C`;
         var cTempMax = `${Math.ceil((weather.main.temp_max - 32) * 5/9)} &deg;C`;
         var cTempMin = `${Math.ceil((weather.main.temp_min - 32) * 5/9)} &deg;C`;
         var cWindSpeed = `${(weather.wind.speed * 0.44704).toFixed(2)} m/s`;

         var windDegree = `${weather.wind.deg}&deg`;

         // background image changes
         if(fTemp > 80){
          $("body").css({"background": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/sunny.jpg) no-repeat center center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
         } else if (fTemp > 50){
          $("body").css({"background": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/cloudy.jpg) no-repeat center center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "color": "white"});
         } else if (fTemp > 30){
                     $("body").css({"background": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(img/cold.jpg) no-repeat center center fixed", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover", "color": "white"});
         }

         // show fahrenheit first
         $("#location").html(`${weather.name}, ${weather.sys.country}`);
         $("#description").html(`${weather.weather[0].main}`);

         $("#temp").html(`Current: ${fTemp} &deg;F`);
         $("#tempMax").html(`Max temperature: ${fTempMax} &deg;F`);
         $("#tempMin").html(`Min temperature: ${fTempMin} &deg;F`);

         $("#windDegree").html(`Degree: ${windDegree}`);
         $("#windSpeed").html(`Speed: ${fWindSpeed}`);

        $(".toggle").click(function(){
          if(!tempSwap){
            $("#temp").html(`Current: ${fTemp} &deg;F`);
            $("#tempMax").html(`Max temperature: ${fTempMax} &deg;F`);
            $("#tempMin").html(`Min temperature: ${fTempMin} &deg;F`);
            $("#windSpeed").html(`Speed: ${fWindSpeed}`);

            tempSwap = true;
          } else {
            // show celsius
            $("#temp").html(`Current: ${cTemp}`);
            $("#tempMax").html(`Max temperature: ${cTempMax}`);
            $("#tempMin").html(`Min temperature: ${cTempMin}`);
            $("#windSpeed").html(`Speed: ${cWindSpeed}`);

            tempSwap = false;
          }
        });    
      });
    });
  });