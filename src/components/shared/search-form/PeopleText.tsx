import { ErrorOutline } from "@mui/icons-material";
import { TextField } from "@mui/material";

interface PeopleTextProps {
  input: {
    value: any;
    onChange: (value: any) => void;
  };
  meta: {
    touched: boolean;
    error: string;
  };
}

const People_Text: React.FC<PeopleTextProps> = ({
  input: { value, onChange },
  meta: { touched, error },
}) => (
  <div style={{ width: 250 }}>
    <TextField
      required
      id="outlined-required"
      label="人数"
      onChange={(e) => onChange(e.target.value)}
      defaultValue="0"
      type="text"
      style={{ marginLeft: 10, width: 250 }}
    />
    {touched && error && (
      <span className="error-message">
        <ErrorOutline className="error-icon" fontSize="small" />
        {error}
      </span>
    )}
  </div>
);

export default People_Text;
