'use client';

import { useState, useEffect } from 'react';

const DadJoke = () => {
	const [joke, setJoke] = useState('');

	try {
		useEffect(() => {
			fetch('https://icanhazdadjoke.com/', {
				headers: {
					Accept: 'application/json',
				},
			})
				.then((response) => response.json())
				.then((data) => setJoke(data.joke));
		}, []);

		return (
			<div>
				<p>{joke}</p>
				<button onClick={() => window.location.reload()}>Get New Joke</button>
			</div>
		);
	} catch (error) {
		console.error(error);
	}
};

export default DadJoke;
