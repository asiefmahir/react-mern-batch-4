import React from "react";

const dummy = async () => {
	await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
	return <div>dummy</div>;
};

export default dummy;
