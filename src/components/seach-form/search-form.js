import { useForm } from "react-hook-form";
import SwitchButton from "../switch-button/switch-button";
import DateRange from "../date-range/date-range";
import { ErrorMessage } from "@hookform/error-message";
import ThemeButton from "../theme-button/theme-button";
import CustomSelect from "../custom-select/custom-select";

function SearchForm({ shape }) {
  const countries = [
    { id: 1, name: "Viet Nam" },
    { id: 2, name: "Singapore" },
  ];
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    console.log("data:", data);
  };

  if (shape === "horizontal") {
    return (
      <form
        className="w-full px-4"
        onSubmit={handleSubmit((data) => handleSearch(data))}
      >
        <div className="space-y-7">
          <div className="relative">
            <CustomSelect
              label={"Departure"}
              fieldName="departure"
              register={register}
              setValue={setValue}
              data={countries}
              isRequired={true}
              defaultValue={countries[1]?.id}
            />

            <div className="absolute top-full text-red-500">
              <ErrorMessage errors={errors} name="departure" />
            </div>
          </div>
          <div className="relative">
            <CustomSelect
              label={"Destination"}
              fieldName="destination"
              register={register}
              setValue={setValue}
              data={countries}
              isRequired={true}
              defaultValue={countries[1]?.id}
            />

            <div className="absolute top-full text-red-500">
              <ErrorMessage errors={errors} name="destination" />
            </div>
          </div>
          <SwitchButton
            register={register}
            setValue={setValue}
            isRequired={true}
            label={"Type"}
            name={"type"}
            label1={"Carrier"}
            label2={"Sender"}
            value1={"carrier"}
            value2={"sender"}
            defaultValue={"sender"}
          />
          <div className="absolute top-full text-red-500">
            <ErrorMessage errors={errors} name="type" />
          </div>
          <DateRange
            register={register}
            setValue={setValue}
            from={"startDate"}
            to={"endDate"}
            label={"Date time"}
            isRequired={true}
          />
          <div className="absolute top-full text-red-500">
            <ErrorMessage errors={errors} name="startDate" />
          </div>
          <div className="absolute top-full text-red-500">
            <ErrorMessage errors={errors} name="endDate" />
          </div>
          <ThemeButton
            name={"Search"}
            height={"3rem"}
            variant={"contained"}
            type={"submit"}
          />
        </div>
      </form>
    );
  } else {
    return (
      <form
        className="w-full px-4"
        onSubmit={handleSubmit((data) => handleSearch(data))}
      >
        <div className="flex flex-col items-center w-full justify-start space-y-4">
          <div className="w-full">
            <SwitchButton
              register={register}
              setValue={setValue}
              name={"type"}
              label1={"Carrier"}
              label2={"Sender"}
              value1={"carrier"}
              value2={"sender"}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full md:justify-center md:items-center items-start md:space-x-3 md:space-y-0 space-y-2">
            <div className="flex space-x-2 w-full flex-row items-center">
              <div className="relative w-full">
                <CustomSelect
                  label={"Departure"}
                  register={register}
                  fieldName="departure"
                  setValue={setValue}
                  data={countries}
                />

                <div className="absolute top-full text-red-500">
                  <ErrorMessage errors={errors} name="departure" />
                </div>
              </div>
              <svg
                fill="currentColor"
                className="hover:bg-[#1876d1] hover:text-white hover:shadow-md cursor-pointer rounded-full min-w-[40px] p-2 min-h-[40px]"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 477.427 477.427"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <polygon points="101.82,187.52 57.673,143.372 476.213,143.372 476.213,113.372 57.181,113.372 101.82,68.733 80.607,47.519 0,128.126 80.607,208.733 "></polygon>{" "}
                    <polygon points="396.82,268.694 375.607,289.907 420,334.301 1.213,334.301 1.213,364.301 420,364.301 375.607,408.694 396.82,429.907 477.427,349.301 "></polygon>{" "}
                  </g>
                </g>
              </svg>
              <div className="relative w-full">
                <CustomSelect
                  label={"Destination"}
                  register={register}
                  fieldName="destination"
                  setValue={setValue}
                  data={countries}
                />

                <div className="absolute top-full text-red-500">
                  <ErrorMessage errors={errors} name="destination" />
                </div>
              </div>
            </div>

            <ThemeButton
              name={"Search"}
              height={"3.4rem"}
              width={"20rem"}
              variant={"contained"}
              type={"submit"}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
