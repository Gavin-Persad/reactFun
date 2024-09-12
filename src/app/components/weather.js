'use client';

import React, { useState } from 'react';

const apiKey = process.env.API_KEY;

function WeatherComponent() {
	const [location, setLocation] = useState('');
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

	async function fetchWeather() {
		try {
			setIsLoading(true);
			const response = await fetch(API_URL);
			const weatherData = await response.json();
			setData(weatherData);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}
	return (
		<div>
			<h1>Weather</h1>
			<input
				type='text'
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<button onClick={fetchWeather}>Get Weather</button>

			{isLoading ? (
				<p>Loading data...</p>
			) : data && data.main ? (
				<div>
					<p>Temperature: {data.main.temp}</p>
					<p>Humidity: {data.main.humidity}</p>
					<p>Wind Speed: {data.wind.speed}</p>
				</div>
			) : null}
		</div>
	);
}

export default WeatherComponent;
