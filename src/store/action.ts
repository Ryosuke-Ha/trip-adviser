import { TripSearchForm } from "../models/TripSearchForm";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducers";
import { Action } from "redux";

export const saveFormData = (formData: TripSearchForm) => ({
  type: "SAVE_FORM_DATA",
  payload: formData,
});

export const fetchDataFromApi = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action
> => {
  return async (dispatch, getState) => {
    try {
      var tmp = getState().form;
      console.log(tmp);

      // データをRedux Storeに保存
      // dispatch(saveFormData(dataFromApi));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
};
