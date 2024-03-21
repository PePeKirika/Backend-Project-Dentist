import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[];
}

const initialState: BookState = { bookItems: []}

export const bookSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>) => {
            if (state.bookItems.find(obj => obj.id === action.payload.id)) {
                const remainItems = state.bookItems.filter(obj => {
                    return obj.id !== action.payload.id
                })
                state.bookItems = remainItems
            }
            state.bookItems.push(action.payload)
        },
        removeBooking: (state, action:PayloadAction<string>) => {
            const remainItems = state.bookItems.filter(obj => {
                return obj.id !== action.payload
            })
            state.bookItems = remainItems
        }
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer