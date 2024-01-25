import { NavLink } from "react-router-dom";
import SearchForm from "../seach-form/search-form";
import LazyLoad from "react-lazy-load";

function BackgroundSearch() {
  return (
    <div className="relative">
      <div className="h-[35rem]">
        <LazyLoad height={"35rem"} threshold={0.25}>
          <img
            className="w-full h-full object-cover"
            src={process.env.PUBLIC_URL + "/images/bg.jpg"}
            alt=""
          />
        </LazyLoad>
      </div>
      <div className="lg:flex flex-col space-y-5 w-[30rem] absolute  hidden bottom-1/2 translate-y-1/2 md:left-10 md:translate-x-0 left-1/2 translate-x-1/2">
        <span className="text-white font-extrabold text-4xl">
          Travel Smarter, Earn More Cash ! Do it now !
        </span>
        <span className="text-white text-2xl">
          Are you planning an international trip? Turn your journey into an
          earning opportunity! With our unique service, you can earn over $200
          USD every time you travel abroad.
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
        <div className="w-full">
          <SearchForm
            shape={"horizontal"}
            handleSearch={(data) => {
              console.log("data :", data);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundSearch;
