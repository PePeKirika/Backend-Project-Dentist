// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type AppointmentState = {
//     appointmentItems: AppointmentItem[];
// }

// const initialState: AppointmentState = { appointmentItems: []}

// export const appointmentSlice = createSlice({
//     name: "list",
//     initialState,
//     reducers: {
//         addAppointment: (state, action:PayloadAction<AppointmentItem>) => {
//             if (state.appointmentItems.find(obj => obj.user === action.payload.user)) {
//                 const remainItems = state.appointmentItems.filter(obj => {
//                     return obj.user !== action.payload.user
//                 })
//                 state.appointmentItems = remainItems
//             }
//             state.appointmentItems.push(action.payload)
//         },
//         removeAppointment: (state, action:PayloadAction<string>) => {
//             const remainItems = state.appointmentItems.filter(obj => {
//                 return obj.user !== action.payload
//             })
//             state.appointmentItems = remainItems
//         }
//     }
// })

// export const { addAppointment, removeAppointment } = appointmentSlice.actions
// export default appointmentSlice.reducer