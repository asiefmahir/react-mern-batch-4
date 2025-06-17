import { useParams } from "react-router";
import { useState, useEffect } from "react";

const PostDetails = () => {
	const obj = useParams();
	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}`)
			.then((res) => res.json())
			.then((data) => {
				setPost(data);
				setLoading(false);
			});
	}, []);
	// console.log(janiNah, "janiNah");

	if (loading) {
		return <h2>Loading.....</h2>;
	}

	return (
		<div>
			<h2>PostDetails Page of Post id - {obj.id}</h2>
			<h2>Title - {post?.title}</h2>
			<p>Description - {post?.body}</p>
		</div>
	);
};

export default PostDetails;
