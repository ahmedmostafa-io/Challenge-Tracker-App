import { configureStore } from "@reduxjs/toolkit";
import ChallengeReducer from "./challenges-slice";

function loadState() {
  try {
    const serializedState = localStorage.getItem("challenges");
    if (serializedState === null) {
      return []; // default
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
}

function saveState(state) {
  try {
    const serializedState = JSON.stringify(state.challenges);
    localStorage.setItem("challenges", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
}

export const store = configureStore({
  reducer: { challenges: ChallengeReducer },
  preloadedState: {
    challenges: loadState(),
  },
});
store.subscribe(() => {
  saveState(store.getState());
});
