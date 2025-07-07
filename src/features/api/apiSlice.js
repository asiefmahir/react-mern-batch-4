import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	collection,
	getDocs,
	doc,
	addDoc,
	deleteDoc,
} from "firebase/firestore";

// data -> state, props
// 95% data state -> server state

import { db } from "../../firebase";

export const apiSlice = createApi({
	reducerPath: "api",
	tagTypes: ["products"],
	baseQuery: fakeBaseQuery(),
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			async queryFn() {
				try {
					const productsCollectionRef = collection(db, "products");
					const data = await getDocs(productsCollectionRef);
					const filteredData = data.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					return { data: filteredData, error: null };
				} catch (error) {
					return { error: "Failed to fetch Products from db" };
				}
			},
			providesTags: ["products"],
		}),

		addProduct: builder.mutation({
			queryFn: async (product) => {
				try {
					await addDoc(collection(db, "products"), product);
					return { data: product };
				} catch (error) {
					return { error };
				}
			},
			invalidatesTags: ["products"],
		}),
	}),
});

export const { useGetAllProductsQuery, useAddProductMutation } = apiSlice;
