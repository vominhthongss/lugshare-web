import React, { useEffect, useRef, useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { TextField } from "@mui/material";
import "./date-range.css";

function DateRange({ register, setValue, from, to, label, isRequired }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  let validationRules = {};
  if (isRequired) {
    validationRules = { required: `${label} is required.` };
  }

  const [showDateRange, setShowDateRange] = useState(false);
  const dateRangeRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDateRange(false);
    }
  };
  const toggleDateRange = () => {
    setShowDateRange(!showDateRange);
  };
  const handleDateRangeChange = (newDateRange) => {
    setState(newDateRange);
    setValue(from, formatDateString(newDateRange[0].startDate));
    setValue(to, formatDateString(newDateRange[0].endDate));
  };

  const formatDateString = (date) => {
    return date.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const dateRangeString = `${formatDateString(
    state[0].startDate
  )} → ${formatDateString(state[0].endDate)}`;

  useEffect(() => {
    handleDateRangeChange(state);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dateRangeRef}>
      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Datetime"
        variant="outlined"
        onFocus={toggleDateRange}
        value={dateRangeString}
      />
      <input
        {...register(from, validationRules)}
        value={state[0].startDate}
        type="text"
        hidden
      />
      <input
        {...register(to, validationRules)}
        value={state[0].endDate}
        type="text"
        hidden
      />
      <div
        className={`absolute right-0 bottom-16 z-10 ${
          showDateRange ? "block" : "hidden"
        }`}
      >
        <DateRangePicker
          onChange={(item) => handleDateRangeChange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        />
      </div>
    </div>
  );
}

export default DateRange;
