import { useState } from "react";
import { useAddProductMutation } from "../features/api/apiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddProductForm = () => {
	const [product, setProduct] = useState({
		title: "",
		description: "",
		price: "",
		image: "",
	});

	const navigate = useNavigate();

	const [addProduct] = useAddProductMutation();

	const handleChange = (e) => {
		setProduct({
			...product,
			[e.target.name]:
				e.target.name === "price"
					? Number(e.target.value)
					: e.target.value,
		});
	};

	const handleChangeImage = async (e) => {
		const file = e.target.files[0];
		console.log(file, "image");

		const data = new FormData();

		data.append("file", file);
		data.append("cloud_name", "dcdga3gke");
		data.append("upload_preset", "simple-app-with-firebase");

		const res = await fetch(
			`https://api.cloudinary.com/v1_1/dcdga3gke/image/upload`,
			{
				method: "POST",
				body: data,
			},
		);
		const result = await res.json();
		console.log(result);
		setProduct({ ...product, image: result.secure_url });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!product.image) {
			toast(`Image is not done uploading, please wait...`);
			return;
		}
		await addProduct(product);
		toast("product added successfully");
		navigate("/");
	};
	return (
		<>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					alignItems: "center",
				}}
				onSubmit={submitHandler}
			>
				<p>Title:</p>
				<input
					value={product.title}
					onChange={handleChange}
					name="title"
					style={{ display: "block", width: "80%" }}
					required
				/>
				<br />
				<p>Price:</p>

				<input
					value={product.price}
					onChange={handleChange}
					name="price"
					style={{ display: "block", width: "80%" }}
					type="number"
					required
				/>
				<br />

				<p>Description:</p>
				<input
					value={product.description}
					onChange={handleChange}
					name="description"
					style={{ display: "block", width: "80%" }}
					type="text"
					required
				/>
				<br />
				<p>Image URL:</p>

				<input
					name="image"
					onChange={handleChangeImage}
					style={{ display: "block", width: "80%" }}
					type="file"
					// required
				/>
				<br />
				{product.image && (
					<img
						src={product.image}
						alt=""
						style={{ width: "100px", height: "100px" }}
					/>
				)}
				<input type="submit" />
			</form>
		</>
	);
};

export default AddProductForm;
