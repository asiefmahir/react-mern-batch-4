import ProductCard from "@/app/components/ProductCard";

const Shop = async () => {
	console.log("I am being rendered");
	// isr -> incremental Static Re-generation
	// vm -> 2ta 100000
	// vm -> 5ta
	// vm -> 2ta
	// 15000 -> 10%-> 1500 -> pay 10 -> $15000
	// backup -> shared hosting
	// {key -> value}

	// cloud

	// system design
	//

	const res = await fetch(`http://localhost:3000/api/product`, {
		next: { tags: ["amaroproanojahachay"] },
	});
	const { data: products } = await res.json();
	return (
		<>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-commerce Website</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					{products?.length > 0 && (
						<div className="section__content">
							<div className="grid three">
								{products?.map((product) => (
									<ProductCard
										key={product._id}
										product={product}
									/>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Shop;
