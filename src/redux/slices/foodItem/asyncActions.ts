import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FoodItem, SearchFoodParams } from "./types";

export const fetchFoodItems = createAsyncThunk<FoodItem[], SearchFoodParams>( // если весь объект состоит из строк или number, чтобы не задавать всем свойствам тип, есть такая короткая запись Record<string, string>
    'item/fetchFoodItemsStatus',
    async (params) => {
        const { sortBy, order, categories, search, currentPage } = params;
        const resp = await axios.get<FoodItem[]>(
            `https://62aee578b735b6d16a48d3b4.mockapi.io/items?page=${currentPage}&${search}&limit=8&${categories}&sortBy=${sortBy}&order=${order}`
        );
        return resp.data
    }
)