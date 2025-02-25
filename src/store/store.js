import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket";
import productSlice from "./product";
import restaurantSlice from "./restaurant";
import reviewSlice from "./review";
import tabsSlice from "./tabs";
import userSlice from "./user";

const rootReducer = (state, action) => ({
  basket: basketSlice.reducer(state?.basket, action),
  restaurant: restaurantSlice.reducer(state?.restaurant, action),
  product: productSlice.reducer(state?.product, action),
  review: reviewSlice.reducer(state?.review, action),
  user: userSlice.reducer(state?.user, action),
  tabs: tabsSlice.reducer(state?.tabs, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
