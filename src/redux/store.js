import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import foodItems from './slices/foodItemsSlice';

export const store = configureStore({
    reducer: { filter, cart, foodItems },
})