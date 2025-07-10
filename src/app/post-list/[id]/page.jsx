import React from "react";

const PostDetails = async ({ params }) => {
	const { id } = await params;
	console.log(id, "id");

	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

	const post = await res.json();

	return (
		<div>
			<h2>Post Details of post - {id}</h2>
			<p>Post Title - {post.title}</p>
		</div>
	);
};

export async function generateStaticParams() {
	console.log("i am running");

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);
	const posts = await res.json();

	return posts.map((post) => ({
		id: String(post.id),
	}));

	// array of objects
}

export default PostDetails;
