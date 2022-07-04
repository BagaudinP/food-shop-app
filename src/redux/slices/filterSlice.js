import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    categoriesIndex: 0,
    currentPage: 1,
    sortIndex: {
        name: "популярности + -",
        sortProperty: "rating",
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setCategoriesIndex(state, action) {
            state.categoriesIndex = action.payload;
        },
        setSortIndex(state, action) {
            state.sortIndex = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setFilters(state, action) {
            state.sortIndex = action.payload.sortIndex;
            state.currentPage = Number(action.payload.currentPage);
            state.categoriesIndex = Number(action.payload.categoriesIndex);
        }
    },
})

export const selectFilter = (state) => state.filter;
export const selectSort = (state) => state.filter.sortIndex;

export const { setCategoriesIndex, setSortIndex, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer