import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Định nghĩa kiểu cho state
interface CounterState {
  value: number;
}

// Trạng thái ban đầu của counter
const initialState: CounterState = {
  value: 0,
};

// Tạo slice cho counter
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Tăng giá trị
    },
    decrement: (state) => {
      state.value -= 1; // Giảm giá trị
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; // Tăng theo giá trị truyền vào
    },
  },
});

// Export các action và reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
