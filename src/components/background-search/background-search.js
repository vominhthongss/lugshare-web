import { Button, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import DateRange from "../date-range/date-range";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SwitchButton from "../switch-button/switch-button";

function BackgroundSearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    console.log("data:", data);
  };

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
      <div className="flex space-y-8 flex-col items-center p-4 absolute bottom-1/2 translate-y-1/2 md:right-10 md:translate-x-0 right-1/2 translate-x-1/2 border rounded-md bg-main shadow-sm w-[35rem] h-[30rem]">
        <span className="text-black font-extrabold text-2xl">
          Search your trip details to start sending
        </span>
        <form
          className="w-full px-4"
          onSubmit={handleSubmit((data) => handleSearch(data))}
        >
          <div className="space-y-5">
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Departure"
              variant="outlined"
              {...register("departure")}
            />
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Destination"
              variant="outlined"
              {...register("destination")}
            />
            <SwitchButton
              register={register}
              name={"type"}
              label1={"Carrier"}
              label2={"Sender"}
              value1={"carrier"}
              value2={"sender"}
            />
            <DateRange register={register} from={"startDate"} to={"endDate"} />
            <Button
              type="submit"
              sx={{ width: "100%", height: "3rem" }}
              variant="contained"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BackgroundSearch;
