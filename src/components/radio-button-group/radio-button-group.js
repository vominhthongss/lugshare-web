import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function RadioButtonsGroup({
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
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={data[0].id}
          name="radio-buttons-group"
        >
          {data.map((x, index) => (
            <FormControlLabel
              key={index}
              value={x.id}
              control={<Radio />}
              onChange={handleChange}
              label={x.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <input type="text" hidden {...register(fieldName, validationRules)} />
    </div>
  );
}
