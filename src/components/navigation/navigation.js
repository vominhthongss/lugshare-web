import { NavLink } from "react-router-dom";
import ThemeButton from "../theme-button/theme-button";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "../../store/main/mainSlice";

function Navigation() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auth);
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="bg-main flex flex-row justify-between p-2 shadow-md">
      <NavLink to={"/home"}>
        <span className="text-3xl font-bold">Lug Share</span>
      </NavLink>

      {data?.email || localStorage.getItem("email") ? (
        <div className="flex flex-col items-end">
          <span>{data?.email || localStorage.getItem("email")}</span>
          <button
            className="text-accent hover:underline"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      ) : (
        <div onClick={() => dispatch(toggleLoginForm())}>
          <ThemeButton name={"Log in"} variant={"outlined"} />
        </div>
      )}
    </div>
  );
}

export default Navigation;
