import { TripSearchForm, TripSearchResult } from "../models/TripSearchForm";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducers";
import { Action } from "redux";

export const saveFormData = (formData: TripSearchResult) => ({
  type: "SAVE_FORM_DATA",
  payload: formData,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const fetchDataFromApi = (): AppThunk<Promise<void>> => {
  return async (dispatch, getState) => {
    try {
      var dataFromApi = getState().form["homeField"].values as TripSearchForm;

      var result: TripSearchResult = {
        title: "aa",
        price: 11,
      };

      dispatch({ type: "SAVE_FORM_DATA", payload: result });
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
};
