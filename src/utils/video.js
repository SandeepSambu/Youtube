import { createSlice } from "@reduxjs/toolkit";

const video = createSlice({
  name: "vid",
  initialState: {
    videos: null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { addVideos } = video.actions;

export default video.reducer;
