import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-main flex flex-row justify-between p-2 shadow-md">
      <Link to={"/home"}>
        <span className="text-3xl font-bold">Lug Share</span>
      </Link>

      <div>
        <Button variant="outlined">Log in</Button>
      </div>
    </div>
  );
}

export default Navigation;
