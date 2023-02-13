document.addEventListener('DOMContentLoaded', () => {
    // Elements we're going to work with
	const searchInput = document.querySelector('#search-input');
	const locationLabel = document.querySelector('#location-label');
	const temperatureValue = document.querySelector('#temp-value');
	const climateValue = document.querySelector('#climate-value');
	const temperatureIcon = document.querySelector('#temp-icon');
	const title = document.querySelector('title');
	const body = document.querySelector('body');

	document.querySelector('#search-form').onsubmit = () => {
		const options = {
			method: 'GET',
			headers: {
				'key': '64dca0d6115d4d11957180504231002'
			}
		};

		fetch(`http://api.weatherapi.com/v1/current.json?q=${searchInput.value}`, options)
		.then(response => response.json())
		.then(data => {
			if (!data.error) {
				let newLocationLabel = searchInput.value.split(" ");

			    for (let index = 0; index < newLocationLabel.length; index++) {
				    newLocationLabel[index] = newLocationLabel[index][0].toUpperCase() + newLocationLabel[index].substr(1);
			    }

				newLocationLabel = newLocationLabel.join(" ");
    
			    locationLabel.innerHTML = newLocationLabel;
				title.innerHTML = `Weather on ${newLocationLabel}`;
				temperatureValue.innerHTML = data.current.temp_c;
				climateValue.innerHTML = data.current.condition.text;

				

				if (data.current.is_day === 1) {
					document.body.classList.remove("is-night");
					switch (data.current.condition.text) {
						case "Sunny":
							temperatureIcon.src = './svg/day.svg';
							break;
						case "Partly cloudy":
							temperatureIcon.src = './svg/cloudy-day-1.svg';
							break;
						case "Cloudy":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Overcast":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Mist":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Patchy rain possible":
							temperatureIcon.src = './svg/rainy-2.svg';
							break;
						case "Patchy snow possible":
							temperatureIcon.src = './svg/snowy-2.svg';
							break;
						case "Patchy freezing drizzle possible":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Thundery outbreaks possible":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Blowing snow":
							temperatureIcon.src = './svg/snowy-6.svg';
						case "Blizzard":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Fog":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Freezing fog":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Patchy light drizzle":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Light drizzle":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Freezing drizzle":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Heavy freezing drizzle":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Patchy light rain":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Light rain":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate rain at times":
							temperatureIcon.src = './svg/rainy-5.svg';
							break;
						case "Moderate rain":
							temperatureIcon.src = './svg/rainy-5.svg';
							break;
						case "Heavy rain at times":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Heavy rain":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Light freezing rain":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate or heavy freezing rain":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Light sleet":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Moderate or heavy sleet":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Patchy light snow":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Light snow":
							temperatureIcon.src = '.svg/snowy-4.svg';
							break;
						case "Patchy moderate snow":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Moderate snow":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Patchy heavy snow":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Heavy snow":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Ice pellets":
							temperatureIcon.src = './svg/rainy-6.svg';
						case "Light rain shower":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate or heavy rain shower":
							temperatureIcon.src = './svg/rainy-5.svg';
							break;
						case "Torrential rain shower":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Light sleet showers":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Moderate or heavy sleet showers":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Light snow":
							temperatureIcon.src ='./svg/snowy-4.svg';
							break;
						case "Moderate or heavy snow showers":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Light showers of ice pellets":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate or heavy showers of ice pellets":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Patchy light rain with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Moderate or heavy rain with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Patchy light snow with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Moderate or heavy snow with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						default:
							temperatureIcon.src = './svg/sun.svg';
							break;
					}
				} else {
				    document.body.classList.add('is-night');
					switch (data.current.condition.text) {
						case "Clear":
							temperatureIcon.src = './svg/night.svg';
							break;
						case "Partly cloudy":
							temperatureIcon.src = './svg/cloudy-night-1.svg';
							break;
						case "Cloudy":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Overcast":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Mist":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Patchy rain possible":
							temperatureIcon.src = './svg/rainy-2.svg';
							break;
						case "Patchy snow possible":
							temperatureIcon.src = './svg/snowy-2.svg';
							break;
						case "Patchy freezing drizzle possible":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Thundery outbreaks possible":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Blowing snow":
							temperatureIcon.src = './svg/snowy-6.svg';
						case "Blizzard":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Fog":
							temperatureIcon.src = './svg/cloudy.svg';
							break;
						case "Freezing fog":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Patchy light drizzle":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Light drizzle":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Freezing drizzle":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Heavy freezing drizzle":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Patchy light rain":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Light rain":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate rain at times":
							temperatureIcon.src = './svg/rainy-5.svg';
							break;
						case "Moderate rain":
							temperatureIcon.src = './svg/rainy-5.svg';
							break;
						case "Heavy rain at times":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Heavy rain":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Light freezing rain":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate or heavy freezing rain":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Light sleet":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Moderate or heavy sleet":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Patchy light snow":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Light snow":
							temperatureIcon.src = '.svg/snowy-4.svg';
							break;
						case "Patchy moderate snow":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Moderate snow":
							temperatureIcon.src = './svg/snowy-5.svg';
							break;
						case "Patchy heavy snow":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Heavy snow":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Ice pellets":
							temperatureIcon.src = './svg/rainy-6.svg';
						case "Light rain shower":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate or heavy rain shower":
							temperatureIcon.src = './svg/rainy-5.svg';
							break;
						case "Torrential rain shower":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Light sleet showers":
							temperatureIcon.src = './svg/snowy-4.svg';
							break;
						case "Moderate or heavy sleet showers":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Light snow":
							temperatureIcon.src ='./svg/snowy-4.svg';
							break;
						case "Moderate or heavy snow showers":
							temperatureIcon.src = './svg/snowy-6.svg';
							break;
						case "Light showers of ice pellets":
							temperatureIcon.src = './svg/rainy-4.svg';
							break;
						case "Moderate or heavy showers of ice pellets":
							temperatureIcon.src = './svg/rainy-6.svg';
							break;
						case "Patchy light rain with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Moderate or heavy rain with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Patchy light snow with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						case "Moderate or heavy snow with thunder":
							temperatureIcon.src = './svg/thunder.svg';
							break;
						default:
							temperatureIcon.src = './svg/sun.svg';
							break;
					}
				}
			} else {
				alert(`Error #${data.error.code}. ${data.error.message}`);
			}
		})
		.catch(error => console.log(error));

		return false;
	}
})