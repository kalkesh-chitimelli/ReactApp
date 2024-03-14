import { configureStore } from "@reduxjs/toolkit";
import mockDataReducer from "../redux/reducer";

const store = configureStore({
  reducer: {
    mockData: mockDataReducer,
  },
});

export default store;
