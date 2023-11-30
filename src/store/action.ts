import { TripSearchForm, TripSearchResult } from "../models/TripSearchForm";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducers";
import { Action, Dispatch } from "redux";

export const saveFormData = (formResult: TripSearchResult) => ({
  type: "SAVE_FORM_DATA",
  payload: formResult,
});

export const addNewResults = (newResults: TripSearchResult) => ({
  type: "ADD_NEW_RESULTS",
  payload: newResults,
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

      var result = getMockTripResult();

      dispatch({
        type: "SAVE_FORM_DATA",
        payload: result,
      });
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };
};

export const handleNextResults = async (dispatch: Dispatch<any>) => {
  try {
    const newResults = getMockTripResult2();
    dispatch({
      type: "ADD_NEW_RESULTS",
      payload: newResults,
    });
  } catch (error) {
    console.error("Error fetching new data:", error);
  }
};

function getMockTripResult(): TripSearchResult[] {
  var results: TripSearchResult[] = [
    {
      place: "ハワイ",
      reasons: ["美しいビーチ", "多彩なアクティビティ"],
      recommends: ["ワイキキビーチ", "ハレアカラ国立公園"],
      prices: ["航空券：4万円", "宿泊費：3万円", "食事代：2万円"],
      cautions: ["シーズンによってツアーが混雑することがある"],
    },
    {
      place: "バルセロナ",
      reasons: ["歴史的な観光地", "美食とカルチャー"],
      recommends: ["サグラダ・ファミリア", "パルク・ゲリュー"],
      prices: ["航空券：5万円", "宿泊費：3万円", "食事代：2万円"],
      cautions: ["一部の観光地では事前予約がおすすめ"],
    },
    {
      place: "東京",
      reasons: ["近未来のテクノロジー", "伝統と現代の融合"],
      recommends: ["東京スカイツリー", "浅草寺"],
      prices: ["航空券：3万円", "宿泊費：4万円", "食事代：2万円"],
      cautions: ["混雑時には観光地の待ち時間に注意"],
    },
  ];

  return results;
}

function getMockTripResult2(): TripSearchResult[] {
  var results: TripSearchResult[] = [
    {
      place: "ハワイ2",
      reasons: ["美しいビーチ", "多彩なアクティビティ"],
      recommends: ["ワイキキビーチ", "ハレアカラ国立公園"],
      prices: ["航空券：4万円", "宿泊費：3万円", "食事代：2万円"],
      cautions: ["シーズンによってツアーが混雑することがある"],
    },
    {
      place: "バルセロナ2",
      reasons: ["歴史的な観光地", "美食とカルチャー"],
      recommends: ["サグラダ・ファミリア", "パルク・ゲリュー"],
      prices: ["航空券：5万円", "宿泊費：3万円", "食事代：2万円"],
      cautions: ["一部の観光地では事前予約がおすすめ"],
    },
    {
      place: "東京2",
      reasons: ["近未来のテクノロジー", "伝統と現代の融合"],
      recommends: ["東京スカイツリー", "浅草寺"],
      prices: ["航空券：3万円", "宿泊費：4万円", "食事代：2万円"],
      cautions: ["混雑時には観光地の待ち時間に注意"],
    },
  ];

  return results;
}
