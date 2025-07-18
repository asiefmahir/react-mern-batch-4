"use server";

import { revalidateTag } from "next/cache";
// isr -> time based
// isr -> on demand isr

export const addProduct = async (formData) => {
	console.log(formData.get("price"), "data");
	const product = {
		title: formData.get("title"),
		price: Number(formData.get("price")),
		description: formData.get("description"),
		image: formData.get("image"),
	};

	await fetch(`http://localhost:3000/api/product`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(product),
	});
	revalidateTag("amaroproanojahachay");
};

// redux ->
