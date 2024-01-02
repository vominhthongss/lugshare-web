import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
const initialState = {
    isLoading: false,
    orderList: null,
    error: null
}

export const getOrderList = createAsyncThunk("order/getOrderList", async () => {
    const response = await api.get("/orders");
    return response.data["data"];
})

export const orderSlice = createSlice({
    name: "order",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getOrderList.pending, (state) => {
            state.isLoading = true;
        }).addCase(getOrderList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orderList = action.payload;
        }).addCase(getOrderList.rejected, (state, action) => {
            state.isLoading = true;
            state.error = action.payload;
        })
    }
})

export default orderSlice.reducer;