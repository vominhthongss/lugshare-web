import { useForm } from "react-hook-form";
import ThemeButton from "../theme-button/theme-button";
import CustomTextField from "../custom-textfield/custom-textfield";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { login, unmounteAuth } from "../../store/auth/authSlice";
import { useEffect } from "react";
import { failed, succeeded } from "../../constants/store";
import { setAlert, toggleLoginForm } from "../../store/main/mainSlice";
import { errorAlert } from "../../constants/alerts";

function Login() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    dispatch(login({ email: data.email, password: data.password }));
  };
  useEffect(() => {
    if (status === succeeded) {
      dispatch(toggleLoginForm());
    }
    if (status === failed) {
      dispatch(
        setAlert({
          show: true,
          type: errorAlert,
          content: error,
        })
      );
    }
    return () => {
      dispatch(unmounteAuth());
    };
  }, [dispatch, status, error]);
  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-3xl font-bold">Log in</span>
      <form
        className="w-full px-4"
        onSubmit={handleSubmit((data) => handleLogin(data))}
      >
        <div className="space-y-7">
          <div className="relative">
            <CustomTextField
              label={"Email"}
              fieldName="email"
              register={register}
              isRequired={true}
            />

            <div className="absolute top-full text-red-500">
              <ErrorMessage errors={errors} name="email" />
            </div>
          </div>
          <div className="relative">
            <CustomTextField
              label={"Password"}
              register={register}
              fieldName="password"
              isPassword={true}
              isRequired={true}
            />

            <div className="absolute top-full text-red-500">
              <ErrorMessage errors={errors} name="password" />
            </div>
          </div>

          <ThemeButton
            name={"Login"}
            height={"3rem"}
            variant={"contained"}
            type={"submit"}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
