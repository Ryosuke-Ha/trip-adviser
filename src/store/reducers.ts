import { AnyAction, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const initialState = {
  searchResult: [],
};

const formDataReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SAVE_FORM_DATA":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "ADD_NEW_RESULTS":
      return {
        ...state,
        searchResult: [...state.searchResult, ...action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formData: formDataReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
