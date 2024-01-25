import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
import { failed, idle, loading, succeeded } from "../../constants/store";
import { errorOrders } from "../../constants/messages";
const initialState = {
  orderList: undefined,
  status: idle,
  error: undefined,
};

export const getOrderList = createAsyncThunk("order/getOrderList", async () => {
  const response = await api.get("/orders");
  return response.data;
});

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    unmounteOrder: (state) => {
      state.status = idle;
      state.error = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderList.pending, (state) => {
        state.status = loading;
      })
      .addCase(getOrderList.fulfilled, (state, action) => {
        state.status = succeeded;
        const { data } = action.payload;
        state.orderList = data;
      })
      .addCase(getOrderList.rejected, (state, action) => {
        state.status = failed;
        state.error = errorOrders;
      });
  },
});
export const { unmounteOrder } = orderSlice.actions;

export default orderSlice.reducer;
