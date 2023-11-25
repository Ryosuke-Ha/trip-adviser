import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";

const ResultFelid = () => {
  const results = useSelector(
    (state: RootState) => state.formData.searchResult
  );
  return (
    <>
      <p>{results.title}</p>
      <p>{results.price}</p>
    </>
  );
};

export default ResultFelid;
