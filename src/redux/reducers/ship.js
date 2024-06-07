import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    address: "",
    city: "",
    country: "",
    phone: "",
    pincode: "",
    state: ""
}

const shipSlice = createSlice({
    name: 'ship',
    initialState,
    reducers: {
        updateShipInfo: (state, action) => {
            state.address = action.payload.address
            state.city = action.payload.city
            state.country = action.payload.country
            state.phone = action.payload.phone
            state.pincode = action.payload.pincode
            state.state = action.payload.state
        },
    }
})

export default shipSlice
export const { updateShipInfo } = shipSlice.actions