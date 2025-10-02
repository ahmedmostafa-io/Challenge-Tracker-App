import { createSlice } from "@reduxjs/toolkit";

const challengesSlice = createSlice({
  name: "challenges",
  initialState: [],
  reducers: {
    addChallenge: (state, action) => {
      state.unshift({
        ...action.payload,
        id: Math.random().toString(),
        status: "active",
      });
    },
    deleteChallenge: (state, action) => {
      return state.filter((challenge) => challenge.id !== action.payload);
    },
    updateChallengeStatus: (state, action) => {
      const { id, status } = action.payload;
      return state.map((challenge) =>
        challenge.id === id ? { ...challenge, status } : challenge
      );
    },
  },
});

export const { addChallenge, deleteChallenge, updateChallengeStatus } =
  challengesSlice.actions;

const ChallengeReducer = challengesSlice.reducer;
export default ChallengeReducer;
