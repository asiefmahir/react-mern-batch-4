// server component
// code -> browser e jabe na
// server -> server -> costing -> malik
// client -> client rendered

import Counter from "@/app/components/Counter";

// hook
// event listener

export default async function Home() {
	console.log("I am being rendered");

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);

	const posts = await res.json();
	return (
		<div>
			<h2>I am jsx</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<hr />
			{/* {placeholder}  */}
			<Counter />
		</div>
	);
}
