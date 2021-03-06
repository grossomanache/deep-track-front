import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ui } from "../interfaces/UiInterfaces";

const initialState = {
  loading: false,
  feedback: false,
  entryId: "",
} as Ui;

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui: Ui) => ({
      ...ui,
      loading: true,
    }),
    finishedLoading: (ui: Ui) => ({
      ...ui,
      loading: false,
    }),
    feedbackOn: (ui: Ui) => ({
      ...ui,
      feedback: true,
    }),
    feedbackOff: (ui: Ui) => ({
      ...ui,
      feedback: false,
    }),
    resetEntryId: (ui: Ui) => ({
      ...ui,
      entryId: "",
    }),
    saveEntryId: (ui: Ui, action: PayloadAction<string>) => ({
      ...ui,
      entryId: action.payload,
    }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
  saveEntryId: saveEntryIdActionCreator,
  resetEntryId: resetEntryIdActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
