import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/cart";

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});
