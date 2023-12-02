import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

function BackgroundSearch() {
  return (
    <div className="relative">
      <div className="h-[35rem]">
        <img
          className="w-full h-full object-cover"
          src={process.env.PUBLIC_URL + "/images/bg.jpg"}
          alt=""
        />
      </div>
      <div className="lg:flex flex-col space-y-5 w-[30rem] absolute  hidden bottom-1/2 translate-y-1/2 md:left-10 md:translate-x-0 left-1/2 translate-x-1/2">
        <span className="text-white font-extrabold text-4xl">
          Earn $200+ USD every time you travel abroad
        </span>
        <span className="text-white text-2xl">
          Deliver products to international shoppers and cut your travel costs
          in half.
        </span>
        <NavLink to={"#"}>
          <span className="text-white text-lg hover:underline">
            How Lug Share works {">"}
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col items-center p-4 absolute bottom-1/2 translate-y-1/2 md:right-10 md:translate-x-0 right-1/2 translate-x-1/2 border rounded-md bg-main shadow-sm w-[35rem] h-[25rem]">
        <span className="text-black font-extrabold text-2xl">
          Search your trip details to start sending
        </span>
        <div className="space-y-5">
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Departure"
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Destination"
            variant="outlined"
          />
          <Button sx={{ width: "100%" }} variant="contained">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSearch;
