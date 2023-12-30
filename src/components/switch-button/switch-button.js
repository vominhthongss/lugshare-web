import { useState } from "react";
import ThemeButton from "../theme-button/theme-button";

function SwitchButton({
  register,
  setValue,
  label,
  name,
  label1,
  value1,
  label2,
  value2,
  isRequired,
  defaultValue,
}) {
  const [type, setType] = useState(defaultValue ?? value1);
  let validationRules = {};
  if (isRequired) {
    validationRules = { required: `${label} is required.` };
  }
  return (
    <div className="flex space-x-2">
      <ThemeButton
        name={label1}
        variant={`${type === value1 ? "contained" : "outlined"}`}
        height={"3rem"}
        width={"fit-content"}
        onClick={() => {
          setType(value1);
          setValue(name, value1);
        }}
      />
      <ThemeButton
        name={label2}
        variant={`${type === value2 ? "contained" : "outlined"}`}
        height={"3rem"}
        width={"fit-content"}
        onClick={() => {
          setType(value2);
          setValue(name, value2);
        }}
      />
      <input
        type="text"
        value={type}
        {...register(name, validationRules)}
        hidden
      />
    </div>
  );
}

export default SwitchButton;
