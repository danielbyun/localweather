<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Geolocation</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <link rel="stylesheet" type="text/css" href="css/localweather.css">
  </head>
  <body>
    <header><h3><a href="http://byunsta.co" target="_blank">Weather App</a></h3> </header>
    <div id="wrapper">
    <h3>Your location:</h3>
    <p id="location"></p>
    <p id="description"></p>
    <button class="toggle">&deg;F / &deg;C</button>
    <ul class="flex-nav">
      <h3>Temperature</h3>
        <li id="temp"></li>
        <li id="tempMax"></li>
        <li id="tempMin"></li>
      <h3>Wind</h3>
      <li id="windDegree"></li>
      <li id="windSpeed"></li>
    </ul>
    <div id="data"></div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="js/localweather.js"></script>
    </body>
</html>

