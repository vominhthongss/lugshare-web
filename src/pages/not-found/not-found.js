import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full flex justify-center h-[70vh] items-center">
      <div className="flex flex-col space-y-4 items-center ">
        <span className="text-7xl">404</span>
        <span>Ooops!!</span>
        <span>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.</span>
        <NavLink to={"/home"}>
          <Button variant="contained">Back To Home</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
