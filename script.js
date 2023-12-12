document.addEventListener('DOMContentLoaded', function () {
	document.querySelector("h1").innerHTML = "Current Weather Conditions in La Jolla";
	document.querySelector(".weather").style.display = "flex";
});

$(function() {
    $.ajax({
        url: 'https://api.weather.gov/gridpoints/SGX/54,20/forecast/hourly'
    }).done(function(response) {
        document.querySelector('.description').innerHTML = response.properties.periods[0].shortForecast;
		document.querySelector('.temp').innerHTML = response.properties.periods[0].temperature + '\u00B0F';
        const img = document.querySelector('img');
		switch (response.properties.periods[0].shortForecast) {
			case "Clear":
				img.src = "images/sunny.png";
			break;

			case "Mostly Clear":
				img.src = "images/partly-cloudy.png";
			break;

			case "Mostly Cloudy":
				img.src = "images/mostly-cloudy.png";
			break;

			case "Cloudy":
				img.src = "images/cloudy.png";
			break;

			default:
				img.src = "images/rainy.png";
			break;
		}
    });
});