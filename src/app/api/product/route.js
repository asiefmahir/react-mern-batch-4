// REST VERB
// GET, POST, PUT, PATCH, DELETE
// serverless
import connectDb from "@/app/utils/db";
import { NextResponse } from "next/server";
import Product from "@/app/modles/product";

// client -> API -> DB -> Result -> Response -> Client
export async function GET(request) {
	console.log("I am being hit");
	await connectDb();
	const products = await Product.find();
	return NextResponse.json({ data: products });
}

export async function POST(request) {
	const body = await request.json();
	try {
		const newProduct = await Product.create(body);
		return NextResponse.json(newProduct, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error: `Failed to Create Product` });
	}
}

// REDUX

// 5 years -> PER PAge/Route

// PRODUCT
