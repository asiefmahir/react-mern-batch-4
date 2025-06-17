// Data layer
// State
// Props
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
// custom hook
const App = () => {
	const [todos, setTodos] = useState([]);
	const [todoTitle, seTodoTitle] = useState("");

	const fetchAllTodos = async () => {
		fetch(`http://localhost:3000/todos`)
			.then((res) => res.json())
			.then((data) => {
				setTodos(data);
			});
	};

	useEffect(() => {
		fetchAllTodos();
	}, []);

	// foyzul karim

	const submitHandler = async (e) => {
		if (todoTitle.trim() === "") {
			return alert(`Please provide a valid todo title`);
		}
		e.preventDefault();
		console.log("I am from submit handler");
		console.log(todoTitle, "todoTitle");
		fetch(`http://localhost:3000/todos`, {
			method: "POST",
			body: JSON.stringify({ title: todoTitle, isCompleted: false }),
			headers: {
				"Content-type": "application/json",
			},
		}).then(() => {
			fetchAllTodos();
			seTodoTitle("");
		});
	};

	const removeHandler = (todoId) => {
		fetch(`http://localhost:3000/todos/${todoId}`, {
			method: "DELETE",
		}).then(() => {
			fetchAllTodos();
		});
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={todoTitle}
					onChange={(e) => seTodoTitle(e.target.value)}
				/>
				<button type="submit">Add Todo</button>
			</form>
			{/* <hr /> */}
			<h2>All Todos</h2>
			<ul>
				{todos?.map((todo) => (
					<li key={todo.id}>
						<span>{todo.title}</span>
						<button onClick={() => removeHandler(todo.id)}>
							Remove Todo
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default App;
