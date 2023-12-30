import { Button } from "@mui/material";

function ThemeButton({ name, variant, width, height, onClick, type }) {
  return (
    <Button
      type={type}
      sx={{
        width: width ? width : "100%",
        height: height ?? "fit-content",
      }}
      variant={variant}
      onClick={onClick}
    >
      {name}
    </Button>
  );
}

export default ThemeButton;
