import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

// Action creators are generated for each case reducer function
export const { setCategoriesIndex, setSortIndex, setCurrentPage, setFilters } = filterSlice.actions

export default filterSlice.reducer