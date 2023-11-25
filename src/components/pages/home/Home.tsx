import React from "react";
import Header from "../../shared/header/Header";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Footer from "../../shared/footer/Footer";
import {
  Field,
  InjectedFormProps,
  WrappedFieldProps,
  reduxForm,
} from "redux-form";
import Region_RadioButton from "../../shared/search-form/RegionRadioButton";
import validate from "../../shared/search-form/validator";
import People_Text from "../../shared/search-form/PeopleText";
import Budget_Text from "../../shared/search-form/BudgetText";
import DatePickers from "../../shared/search-form/DatePicker";
import { connect } from "react-redux";
import { fetchDataFromApi } from "../../../store/action";
import { TripSearchForm } from "../../../models/TripSearchForm";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store/reducers";

interface HomeFieldProps {
  fetchDataFromApi: () => void;
}

const HomeFelid: React.FC<
  HomeFieldProps & InjectedFormProps<FormData, HomeFieldProps>
> = ({ handleSubmit, fetchDataFromApi }) => {
  const styles = {
    displayCenter: { display: "flex", justifyContent: "center", margin: 20 },
  };

  const onSubmit = (values: any) => {
    fetchDataFromApi();
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: 5,
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: "90%",
            height: 400,
          },
        }}
      >
        <Paper elevation={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ paddingTop: 40 }}>
              <div style={styles.displayCenter}>
                <Field
                  name="departureDate"
                  component={(input: WrappedFieldProps) => (
                    <DatePickers dateInput={input} label="行き" />
                  )}
                />
                <span style={{ width: 10 }}></span>
                <Field
                  name="returnDate"
                  component={(input: WrappedFieldProps) => (
                    <DatePickers dateInput={input} label="帰り" />
                  )}
                />
              </div>

              <div style={styles.displayCenter}>
                <Field name="budget" component={Budget_Text} />
                <Field name="people" component={People_Text} />
              </div>

              <div style={styles.displayCenter}>
                <div>
                  <Field name="region" component={Region_RadioButton} />
                </div>

                <div style={{ width: 250 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ marginLeft: 10, width: "100%", height: "70%" }}
                  >
                    検索
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, any>) => ({
  fetchDataFromApi: () => dispatch(fetchDataFromApi()),
});

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm<TripSearchForm, HomeFieldProps>({
    form: "homeField",
    validate,
  })(HomeFelid)
);
