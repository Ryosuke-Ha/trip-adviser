import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { WrappedFieldProps } from "redux-form";
import React from "react";
import { ErrorOutline } from "@mui/icons-material";

interface DatePickersProps {
  dateInput: WrappedFieldProps;
  label: string;
}

const DatePickers: React.FC<DatePickersProps> = ({ dateInput, label }) => {
  const handleChange = (selectedDate: Date | null) => {
    dateInput.input.onChange(selectedDate);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <div style={{ width: 250 }}>
            <MuiDateTimePicker
              label={label}
              views={["year", "month", "day"]}
              onChange={handleChange}
              value={dateInput.input.value || null}
            />
            {dateInput.meta.touched && dateInput.meta.error && (
              <span className="error-message">
                <ErrorOutline className="error-icon" fontSize="small" />
                {dateInput.meta.error}
              </span>
            )}
          </div>
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
};

export default DatePickers;
