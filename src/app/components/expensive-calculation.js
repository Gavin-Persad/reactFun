'use client';

import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState('');

	// A function that simulates an expensive calculation
	const expensiveCalculation = (num) => {
		console.log('Calculating...');
		for (let i = 0; i < 1000000000; i++) {} // Simulate a heavy computation
		return num * 2;
	};

	// Memoize the result of the expensive calculation
	const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder='Type something...'
			/>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<p>Count: {count}</p>
			<p>Memoized Value: {memoizedValue}</p>
		</div>
	);
}

export default ExpensiveCalculationComponent;
