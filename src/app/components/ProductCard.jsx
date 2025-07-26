"use client";
import Image from "next/image";

function ProductCard({ product }) {
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure
				// style={{
				// 	position: "relative",
				// 	aspectRatio: "inherit",
				// 	height: "100px",
				// 	width: "100px",
				// }}
				>
					<Image
						src={product.image}
						alt={product.title}
						width={2500}
						height={1600}
					/>
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__content">
				<p>
					<span>${product.price}</span>
				</p>
			</div>
			<div className="ingredient__btn">
				<button onClick={(e) => {}} className="btn-white">
					ADD TO CART
				</button>
			</div>
		</div>
	);
}

export default ProductCard;

// next js -> isr, server action, middleware, rendering pattern, server side rendering
// context api, useReducer, useState
//
