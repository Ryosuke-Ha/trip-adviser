import React from "react";
import Header from "../../shared/header/Header";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Footer from "../../shared/footer/Footer";

function Home() {
  const dateBefore = new Date();
  const now = new Date();
  const dateAfter = now.setDate(now.getDate() + 1);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(dateAfter));

  const styles = {
    displayCenter: { display: "flex", justifyContent: "center", margin: 20 },
  };
  return (
    <div>
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
          <div style={{ paddingTop: 40 }}>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateTimePicker", "DateTimePicker"]}
                >
                  <div style={styles.displayCenter}>
                    <div style={{ width: 250 }}>
                      <DateTimePicker
                        label="行き"
                        defaultValue={dayjs(dateBefore)}
                        views={["year", "month", "day"]}
                      />
                    </div>
                    <div style={{ marginLeft: 10, width: 250 }}>
                      <DateTimePicker
                        label="帰り"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                        views={["year", "month", "day"]}
                      />
                    </div>
                  </div>
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div style={styles.displayCenter}>
              <TextField
                label="予算"
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">万円</InputAdornment>
                  ),
                }}
                style={{ width: 250 }}
              />
              <TextField
                required
                // error={}
                id="outlined-required"
                label="人数"
                defaultValue="0"
                style={{ marginLeft: 10, width: 250 }}
              />
            </div>
            <div style={styles.displayCenter}>
              <div>
                <FormControl style={{ width: 250 }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    地域
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="0"
                  >
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="国内"
                    />
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="海外"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div style={{ width: 250 }}>
                <Button
                  variant="contained"
                  style={{ marginLeft: 10, width: "100%", height: "70%" }}
                >
                  検索
                </Button>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
      <Footer />
    </div>
  );
}

function isNumber(value: any): value is number {
  return typeof value === "number";
}

export default Home;
