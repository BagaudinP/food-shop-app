import { RootState } from "../../store";

export const selectFoodData = (state: RootState) => state.foodItems;
