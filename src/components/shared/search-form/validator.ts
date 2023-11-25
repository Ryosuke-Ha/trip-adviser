import dayjs from "dayjs";
import { TripSearchForm } from "../../../models/TripSearchForm";
import { FormErrors } from "redux-form";

const validate = (
  values: TripSearchForm
): FormErrors<TripSearchForm, string> => {
  const errors: FormErrors<TripSearchForm, string> = {};

  if (!values.departureDate) {
    errors.departureDate = "入力してください";
  } else if (!values.returnDate) {
    errors.returnDate = "入力してください";
  } else if (dayjs(values.returnDate).isBefore(dayjs(values.departureDate))) {
    errors.returnDate = "行きより後の日付を選択してください";
  }

  if (!values.region) {
    errors.region = "選択してください";
  }

  if (!values.people) {
    errors.people = "入力してください";
  } else if (isNaN(Number(values.people))) {
    errors.people = "数値で入力してください";
  } else if (values.people < 1) {
    errors.people = "1人以上で入力してください";
  }

  if (!values.budget) {
    errors.budget = "入力してください";
  } else if (isNaN(Number(values.budget))) {
    errors.budget = "数値で入力してください";
  } else if (values.budget < 0) {
    errors.budget = "正しい数値を入力してください";
  }

  return errors;
};

export default validate;
