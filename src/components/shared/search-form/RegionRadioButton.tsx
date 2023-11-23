import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ErrorOutline from "@mui/icons-material/ErrorOutline";

interface RegionRadioButtonProps {
  input: {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  meta: {
    touched: boolean;
    error: string;
  };
}

const Region_RadioButton: React.FC<RegionRadioButtonProps> = ({
  input,
  meta: { touched, error },
  ...rest
}) => (
  <FormControl style={{ width: 250 }}>
    <FormLabel id="demo-row-radio-buttons-group-label">地域</FormLabel>
    <RadioGroup
      {...input}
      {...rest}
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="0" control={<Radio />} label="国内" />
      <FormControlLabel value="1" control={<Radio />} label="海外" />
    </RadioGroup>
    {touched && error && (
      <span className="error-message">
        <ErrorOutline className="error-icon" fontSize="small" />
        {error}
      </span>
    )}
  </FormControl>
);

export default Region_RadioButton;
