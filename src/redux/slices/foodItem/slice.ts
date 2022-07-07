import { createSlice } from '@reduxjs/toolkit'
import { fetchFoodItems } from './asyncActions';
import { FoodSliceState, Status } from "./types";

const initialState: FoodSliceState = {
    foodItems: [],
    status: Status.LOADING,
}

const foodItemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setFoodItems(state, action) {
            state.foodItems = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoodItems.pending, (state) => {
            state.status = Status.LOADING;
            state.foodItems = [];
        })
        builder.addCase(fetchFoodItems.fulfilled, (state, action) => {
            state.foodItems = action.payload;
            state.status = Status.SUCCESS;
        })
        builder.addCase(fetchFoodItems.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.foodItems = [];
        })
    },
})

export const { setFoodItems } = foodItemsSlice.actions

export default foodItemsSlice.reducer