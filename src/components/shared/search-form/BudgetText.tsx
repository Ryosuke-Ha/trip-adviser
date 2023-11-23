import { ErrorOutline } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

interface BudgetTextProps {
  input: {
    value: any;
    onChange: (value: any) => void;
  };
  meta: {
    touched: boolean;
    error: string;
  };
}

const Budget_Text: React.FC<BudgetTextProps> = ({
  input: { value, onChange },
  meta: { touched, error },
}) => (
  <div style={{ width: 250 }}>
    <TextField
      required
      id="outlined-required"
      label="予算"
      onChange={(e) => onChange(e.target.value)}
      defaultValue="0"
      type="text"
      InputProps={{
        startAdornment: <InputAdornment position="start">万円</InputAdornment>,
      }}
      style={{ width: 250 }}
    />
    {touched && error && (
      <span className="error-message">
        <ErrorOutline className="error-icon" fontSize="small" />
        {error}
      </span>
    )}
  </div>
);

export default Budget_Text;
