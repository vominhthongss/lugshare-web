import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxGroup({
  label,
  data,
  register,
  setValue,
  fieldName,
  isRequired,
}) {
  const handleChange = (event) => {
    setValue(fieldName, event.target.value);
  };
  let validationRules = {};
  if (isRequired) {
    validationRules = { required: `${label} is required.` };
  }
  return (
    <div className="flex flex-col">
      <span>{label}</span>
      <FormGroup>
        {data.map((x, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox onChange={handleChange} />}
            label={x.name}
            value={x.id}
          />
        ))}
      </FormGroup>
      <input type="text" hidden {...register(fieldName, validationRules)} />
    </div>
  );
}
