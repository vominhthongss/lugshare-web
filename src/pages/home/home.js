import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BackgroundSearch from "../../components/background-search/background-search";
import OrderCard from "../../components/order-card/order-card";
import ThemeButton from "../../components/theme-button/theme-button";
import LazyLoad from "react-lazy-load";
import { getOrderList, unmounteOrder } from "../../store/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { failed } from "../../constants/store";
import { setAlert } from "../../store/main/mainSlice";
import { errorAlert } from "../../constants/alerts";
import { Link } from "react-router-dom";

function Home() {
  const { status, orderList, error } = useSelector((state) => state.order);
  const options = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
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
    <div>
      <BackgroundSearch />

      <div className="bg-blue-50 w-full flex md:flex-row flex-col justify-between px-32 py-10">
        <div className="flex flex-row items-center space-x-2">
          <svg
            className="text-accent min-w-[35px]"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            version="1.1"
            x="0"
            y="0"
            fill="currentColor"
          >
            <path
              d="M17.5 0a17.5 17.5 0 100 35 17.5 17.5 0 100-35z"
              stroke="none"
            ></path>
            <g fill="none" stroke="#fff">
              <path d="M17.5 26c4.7 0 8.5-3.8 8.5-8.5S22.2 9 17.5 9 9 12.8 9 17.5s3.8 8.5 8.5 8.5z"></path>
              <path
                d="M13.7 17.4l3.6 3.1 4.5-5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <div className="flex flex-col">
            <span className="font-bold">Guaranteed Payout</span>
            <span className="text-gray-400 text-xs">
              Shoppers pay Grabr when they accept your offer.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <svg
            className="text-accent min-w-[35px]"
            fill="currentColor"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 0a17.5 17.5 0 100 35 17.5 17.5 0 100-35z"
              stroke="none"
            ></path>
            <path
              d="M18 22l5-5m-5 5l-5-5m5 5V10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              stroke="#fff"
            ></path>
            <path
              strokeLinecap="round"
              d="M12.5 25.5h11"
              fill="none"
              stroke="#fff"
            ></path>
          </svg>
          <div className="flex flex-col">
            <span className="font-bold">Guaranteed Payout</span>
            <span className="text-gray-400 text-xs">
              Shoppers pay Grabr when they accept your offer.
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <svg
            className="text-accent min-w-[35px]"
            fill="currentColor"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            version="1.1"
            x="0"
            y="0"
          >
            <path
              d="M17.5 0a17.5 17.5 0 100 35 17.5 17.5 0 100-35z"
              stroke="none"
            ></path>
            <path
              d="M26 22.5c0 .3-.3.5-.5.5h-16c-.3 0-.5-.3-.5-.5v-10c0-.3.3-.5.5-.5h15.9c.3 0 .5.3.5.5v10z"
              fill="none"
              stroke="#fff"
            ></path>
            <path
              d="M17.5 14.5a3 3 0 100 6 3 3 0 100-6z"
              fill="none"
              stroke="#fff"
            ></path>
          </svg>
          <div className="flex flex-col">
            <span className="font-bold">Guaranteed Payout</span>
            <span className="text-gray-400 text-xs">
              Shoppers pay Grabr when they accept your offer.
            </span>
          </div>
        </div>
      </div>

      <LazyLoad height={"full"} threshold={0.25}>
        <div>
          <div className="flex flex-col items-center md:px-[20%] px-0 space-y-5 py-10">
            <span className="text-5xl font-bold text-center">
              Find orther orders
            </span>
            <span className="text-gray-400 font-bold text-xl text-center">
              Need a little inspiration? Browse orders from these cities with
              most orders to decide where to go next.
            </span>
          </div>
          <div className="w-full flex justify-center">
            <Link to={"/finding"}>
              <ThemeButton
                name={"Finding"}
                variant={"contained"}
                height={"3rem"}
                width={"10rem"}
              ></ThemeButton>
            </Link>
          </div>
        </div>
      </LazyLoad>
      {orderList && (
        <LazyLoad className="md:h-[300px] h-full" threshold={0.25}>
          <Carousel
            responsive={options}
            partialVisible={false}
            className="flex"
          >
            {orderList.map((order, index) => (
              <div key={index} className="p-4">
                <OrderCard order={order} index={index} />
              </div>
            ))}
          </Carousel>
        </LazyLoad>
      )}
      <LazyLoad height={"full"} threshold={0.25}>
        <div className="mt-12 py-5">
          <div className="flex flex-col items-center md:px-[20%] px-0 space-y-5 py-10">
            <span className="text-5xl font-bold text-center">
              Plan Your Next Adventure
            </span>
            <span className="text-gray-400 font-bold text-xl text-center">
              Not sure where your next destination will be? Browse unique orders
              from popular cities to find new inspiration.
            </span>
          </div>
          <div className="w-full flex justify-center">
            <ThemeButton
              name={"Learn more"}
              variant={"contained"}
              height={"3rem"}
              width={"10rem"}
            ></ThemeButton>
          </div>
        </div>
      </LazyLoad>
      <LazyLoad threshold={0.25} className="bg-blue-50 md:h-[200px] h-full">
        <div className=" w-full flex justify-center flex-col items-center py-10 space-y-5 mt-10">
          <span className="text-3xl font-bold">Frequently Asked Questions</span>
          <div className="w-full flex md:flex-row flex-col justify-between px-32">
            <div className="flex flex-row items-center ">
              <div className="flex flex-col">
                <span className="font-bold">How is my payment guaranteed?</span>
                <span className="text-gray-400 text-xs">
                  Shoppers pay upfront and cannot cancel once paid.
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex flex-col">
                <span className="font-bold">Why do I buy the product?</span>
                <span className="text-gray-400 text-xs">
                  You buy the product so that you own it and are aware of the
                  contents.
                </span>
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <div className="flex flex-col">
                <span className="font-bold">How are deliveries arranged?</span>
                <span className="text-gray-400 text-xs">
                  Arrange to meet in a public place with your shoppers via Lug
                  Share messenger.
                </span>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
      <LazyLoad height={600} threshold={0.25}>
        <div className="w-full bg-white py-10 md:px-32 px-0 flex lg:flex-row flex-col justify-between items-center">
          <div className="flex flex-col lg:w-1/2 w-full space-y-2 p-2">
            <span className="font-bold text-xl">
              Recent Lug Share from Around the World
            </span>
            <span className="text-gray-400">
              These items were recently requested from all over the world. Join
              our community in shopping without borders.
            </span>
            <ThemeButton
              name={"Learn more"}
              variant={"contained"}
              height={"3rem"}
              width={"10rem"}
            ></ThemeButton>
          </div>
          <img
            className="cursor-pointer hover:shadow-md min-w-[400px] rounded-md"
            src="https://grabr.io/assets/57dd31a1182cb6f76c57f89c4c88e36b.jpg"
            alt=""
          />
        </div>
      </LazyLoad>
    </div>
  );
}

export default Home;
