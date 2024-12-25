import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import videoReducer from "./video";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";

const store = configureStore({
  reducer: {
    nav: navReducer,
    vid: videoReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});

export default store;
