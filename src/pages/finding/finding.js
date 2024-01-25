import { useForm } from "react-hook-form";
import CustomSelect from "../../components/custom-select/custom-select";
import SearchForm from "../../components/seach-form/search-form";
import ThemeButton from "../../components/theme-button/theme-button";
import OrderCard from "../../components/order-card/order-card";
import RadioButtonsGroup from "../../components/radio-button-group/radio-button-group";
import CheckboxGroup from "../../components/checkbox-group/checkbox-group";
import { getOrderList, unmounteOrder } from "../../store/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { failed } from "../../constants/store";
import { setAlert } from "../../store/main/mainSlice";
import { errorAlert } from "../../constants/alerts";
function Finding() {
  const { status, orderList, error } = useSelector((state) => state.order);
  const sorts = [
    { id: 1, name: "Lowest price" },
    { id: 2, name: "Highest price" },
    { id: 3, name: "Highest reward" },
  ];
  const orderDetails = [
    {
      id: 1,
      name: "All order",
    },
    {
      id: 2,
      name: "Instant macth",
    },
    {
      id: 3,
      name: "No delivery",
    },
  ];
  const retailers = [
    {
      id: 1,
      name: "Amazon",
    },
    {
      id: 2,
      name: "Apple",
    },
    {
      id: 3,
      name: "Ebay",
    },
  ];
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFilter = (data) => {
    console.log("data:", data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (!orderList) {
      dispatch(getOrderList());
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
      dispatch(unmounteOrder());
    };
  }, [dispatch, orderList, status, error]);

  return (
    <div className="xl:px-36 lg:px-10 md:px-6 sm:px-5 px-0 py-4">
      <SearchForm shape={"vertical"} />
      <div className="w-full flex md:flex-row flex-col-reverse mt-10 px-3 md:space-x-2 space-x-0">
        <div className="md:w-3/4 w-full space-y-5">
          {orderList &&
            orderList.map((order, index) => (
              <div key={index}>
                <OrderCard order={order} index={index} />
              </div>
            ))}
        </div>
        <form
          onSubmit={handleSubmit((data) => handleFilter(data))}
          className="md:w-1/4 w-full mb-5"
        >
          <div className="w-full border rounded-md shadow">
            <CustomSelect
              label={"Sorting"}
              fieldName="sorting"
              register={register}
              setValue={setValue}
              data={sorts}
            />
          </div>
          <div className="border rounded-md shadow px-2 py-2 space-y-2">
            <RadioButtonsGroup
              label={"Order detail"}
              fieldName="orderDetail"
              register={register}
              setValue={setValue}
              data={orderDetails}
            />
            <CheckboxGroup
              label={"Retailers"}
              fieldName="retailers"
              register={register}
              setValue={setValue}
              data={retailers}
            />
            <ThemeButton
              name={"Apply"}
              height={"3.4rem"}
              width={"100%"}
              variant={"contained"}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Finding;
