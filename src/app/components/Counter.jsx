"use client";

// both in build time (as much as possible)
// client ->

// 'use client

import { useState } from "react";

const Counter = () => {
	console.log("I am client component");

	const [counter, setCounter] = useState(10);
	const increaseHandler = () => {
		setCounter((prev) => prev + 1);
	};
	return (
		<div>
			<p>Value is {counter}</p>
			<button onClick={increaseHandler}>Increase by 1</button>
		</div>
	);
};

export default Counter;
