import { PayloadAction, createSlice } from "@reduxjs/toolkit"


const initialState = {
    ingredients: [] as string[]
}

export const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {
        addIngredient(state, action: PayloadAction<string>) {
            state.ingredients.push(action.payload);
        },
        resetIngredients(state) {
            state.ingredients = []
        }
    }
})

export const {addIngredient, resetIngredients} = sandwichSlice.actions;
export default sandwichSlice.reducer;
