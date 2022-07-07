import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart/slice';
import filter from './slices/filter/slice';
import foodItems from './slices/foodItem/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: { filter, cart, foodItems },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch