import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { TripSearchResult } from "../../../models/TripSearchForm";

const ResultFelid = () => {
  const results = useSelector(
    (state: RootState) => state.formData.searchResult
  );
  return (
    <>
      {results.map((result: TripSearchResult, index: number) => {
        return (
          <div key={index}>
            <h2>{result.place}</h2>
            <p>Reasons to visit: {result.reasons.join(", ")}</p>
            <p>Recommends: {result.recommends.join(", ")}</p>
            <p>Prices: {result.prices.join(", ")}</p>
            <p>Cautions: {result.cautions.join(", ")}</p>
          </div>
        );
      })}
    </>
  );
};

export default ResultFelid;
