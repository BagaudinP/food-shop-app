import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchFoodItems = createAsyncThunk(
    'item/fetchFoodItemsStatus',
    async ({ sortBy, order, categories, search, currentPage }) => {
        const resp = await axios.get(
            `https://62aee578b735b6d16a48d3b4.mockapi.io/items?page=${currentPage}&${search}&limit=8&${categories}&sortBy=${sortBy}&order=${order}`
        );
        return resp.data
    }
)

const initialState = {
    foodItems: [],
    status: 'loading',
}

const foodItemsSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setFoodItems(state, action) {
            state.foodItems = action.payload;
        }
    },
    extraReducers: {
        [fetchFoodItems.pending]: (state) => {
            state.status = 'loading';
            state.foodItems = [];
        },
        [fetchFoodItems.fulfilled]: (state, action) => {
            state.foodItems = action.payload;
            state.status = 'success';
        },
        [fetchFoodItems.rejected]: (state, action) => {
            state.status = 'error';
            state.foodItems = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFoodItems } = foodItemsSlice.actions

export default foodItemsSlice.reducer