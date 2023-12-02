import { Button } from "@mui/material";
import { useState } from "react";

function SwitchButton({ register, name, label1, value1, label2, value2 }) {
  const [type, setType] = useState(value1);
  return (
    <div className="flex space-x-2">
      <Button
        variant={`${type === value1 ? "contained" : "outlined"}`}
        onClick={() => setType(value1)}
        sx={{ height: "3rem" }}
      >
        {label1}
      </Button>
      <Button
        variant={`${type === value2 ? "contained" : "outlined"}`}
        onClick={() => setType(value2)}
        sx={{ height: "3rem" }}
      >
        {label2}
      </Button>
      <input type="text" value={type} {...register(name)} hidden />
    </div>
  );
}

export default SwitchButton;
