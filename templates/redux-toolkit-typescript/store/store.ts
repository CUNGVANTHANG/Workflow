import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Tạo store với reducer từ các slice
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Định nghĩa RootState và AppDispatch để sử dụng trong các hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
