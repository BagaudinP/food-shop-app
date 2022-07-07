import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
    searchValue: '',
    categoriesIndex: 0,
    currentPage: 1,
    sortIndex: {
        name: "популярности + -",
        sortProperty: SortPropertyEnum.RATING_DESC,
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setCategoriesIndex(state, action: PayloadAction<number>) {
            state.categoriesIndex = action.payload;
        },
        setSortIndex(state, action: PayloadAction<Sort>) {
            state.sortIndex = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if(Object.keys(action.payload).length) {
                state.sortIndex = action.payload.sortIndex;
                state.currentPage = Number(action.payload.currentPage);
                state.categoriesIndex = Number(action.payload.categoriesIndex);
            } else {
                state.sortIndex = {
                    name: "популярности + -",
                    sortProperty: SortPropertyEnum.RATING_DESC,
                };
                state.currentPage = 1;
                state.categoriesIndex = 0;
            }
        }
    },
})

export const { setCategoriesIndex, setSortIndex, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer;