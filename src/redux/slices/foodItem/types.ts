export type FoodItem = {
    id: string, 
    title: string, 
    price: number, 
    imageUrl: string, 
    maker: string, 
    sizes: number[],
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface FoodSliceState {
    foodItems: FoodItem[],
    status: Status,
}

export type SearchFoodParams = { 
    sortBy: string, 
    order: string, 
    categories: string, 
    search: string, 
    currentPage: string 
}