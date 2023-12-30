import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function CustomSelect({
  data,
  label,
  register,
  setValue,
  fieldName,
  isRequired,
  defaultValue,
}) {
  const [value, setValueSelect] = useState(defaultValue ?? data[0].id);
  let validationRules = {};
  if (isRequired) {
    validationRules = { required: `${label} is required.` };
  }
  const handleChange = (event) => {
    setValueSelect(event.target.value);
    setValue(fieldName, event.target.value);
  };
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel id="label">{label}</InputLabel>
      <Select
        labelId="label"
        sx={{ width: "100%" }}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {data.map((value, index) => (
          <MenuItem key={index} value={value.id}>
            {value.name}
          </MenuItem>
        ))}
      </Select>
      <input
        value={value}
        type="text"
        {...register(fieldName, validationRules)}
        hidden
      />
    </FormControl>
  );
}

export default CustomSelect;
