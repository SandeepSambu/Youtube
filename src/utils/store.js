import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import videoReducer from "./video";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    vid: videoReducer,
    search: searchReducer,
  },
});

export default store;
