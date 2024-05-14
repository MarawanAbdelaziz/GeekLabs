import { useState } from "react";
import SideBar from "./components/SideBar";
import Filter from "./components/Filter";

// eslint-disable-next-line no-unused-vars
const array = [
  {
    id: 1,
    title: "AMZN",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 2,
    title: "TSLA",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 3,
    title: "ABQQ",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "High Risk",
  },
  {
    id: 4,
    title: "MSFT",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
  {
    id: 5,
    title: "PYPL",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 6,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
  {
    id: 7,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
  {
    id: 8,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 9,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
  {
    id: 10,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 10,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 10,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
  {
    id: 10,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "green",
    risk: "Low Risk",
  },
  {
    id: 10,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
  {
    id: 10,
    title: "NFLX",
    price: 200,
    percentage: 0.25,
    color: "red",
    risk: "Low Risk",
  },
];

function App() {
  const [currentId, setCurrentId] = useState();
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <section className=" flex font-poppins">
      <div className=" basis-[100%] lg:basis-[70%] min-[1600px]:basis-[73%] bg-[#202020] h-screen">
        <SideBar />
        <div className="ms-20 lg:ms-auto sm:w-[90%] flex">
          <div className="flex w-full justify-between ">
            <div className="flex">
              <div className="bg-[#53ACFF] rounded-md w-1.5 h-10 sm:h-16 ms-6 me-3 mt-6 "></div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-6 sm:mt-8 md:mt-6 me-3 sm:me-0 ">
                ALERTS
              </h2>
            </div>

            <div className="sm:me-0 bg-[#313131] hidden lg:block w-full rounded-md mt-8 ms-6 px-4 py-2.5 h-fit">
              <input
                className="bg-[url('src/assets/Search.svg')] w-full border-none bg-right bg-no-repeat bg-transparent placeholder:text-white focus:outline-none"
                type="text"
                placeholder="Search By..."
              />
            </div>
            <div className="mt-11 ms-4 w-10 me-5 hidden lg:block">
              <img className="w-full" src="src/assets/alert.svg" alt="alert" />
            </div>
            <div className="lg:hidden mt-6 flex items-center">
              <img
                className="w-7 me-6"
                src="src/assets/Search.svg"
                alt="Search"
              />
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="bg-[#53ACFF] h-fit rounded-md px-7 py-0.5 font-normal me-4"
              >
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="ms-[105px] lg:ms-auto  h-[70vh] sm:h-[79vh] min-[1600px]:h-[84vh]  sm:w-[86.5%] mt-12 overflow-y-scroll">
          {array?.map((item) => (
            <div key={item.id} className="bg-[#181818] rounded-md me-3 mb-4">
              <button
                className="bg-[#313131] w-full text-center rounded-md flex justify-between items-center text-[10px] sm:text-sm lg:text-xl font-normal"
                onClick={() => {
                  if (currentId == item.id) {
                    setCurrentId("");
                  } else {
                    setCurrentId(item.id);
                  }
                }}
              >
                <div className="flex justify-center w-[20%] items-center ms-2 sm:ms-5 lg:py-2 my-2 lg:my-3 ">
                  <img
                    className="me-2 sm:me-6 lg:me-8 w-[15px] sm:w-[20px] md:w-[30px] lg:w-[35px]"
                    src="src/assets/name.svg"
                    alt=""
                  />
                  <p>{item.title}</p>
                </div>
                <div className="bg-[#414040] w-0.5 h-8 lg:h-12"></div>
                <div className="flex justify-center w-[20%]  items-center lg:py-2 my-2 lg:my-3">
                  <img
                    className="me-2 sm:me-6 lg:me-8 w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px]"
                    src="src/assets/price.svg"
                    alt=""
                  />
                  <p>{item.price}</p>
                </div>
                <div className="bg-[#414040] w-0.5 h-8 lg:h-12"></div>

                <div className="flex justify-center w-[20%]  items-center lg:py-2 my-2 lg:my-3">
                  <img
                    className="me-2 sm:me-6 lg:me-8 w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px]"
                    src="src/assets/percentage.svg"
                    alt=""
                  />
                  {item.color == "red" ? (
                    <p className="text-[#D94111]">-{item.percentage}%</p>
                  ) : (
                    <p className="text-[#118F4B]">-{item.percentage}%</p>
                  )}
                </div>
                <div className="bg-[#414040] w-0.5 h-8 lg:h-12"></div>

                <div className="flex justify-center w-[20%]  items-center me-2 sm:me-5 lg:py-2 my-2 lg:my-3">
                  {item.risk == "High Risk" ? (
                    <img
                      className="me-2 sm:me-6 lg:me-8 w-[15px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                      src="src/assets/HighRisk.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="me-2 sm:me-6 lg:me-8 w-[15px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                      src="src/assets/risk.svg"
                      alt=""
                    />
                  )}
                  <p>{item.risk}</p>
                </div>
              </button>
              <div
                className={`mt-8 mx-14 ${
                  currentId == item.id ? "block" : "hidden"
                }`}
              >
                <p className="font-">
                  <span className="font-bold">$TSLA</span> just announced an
                  acquisition of <span className="font-bold">$NFLX</span> at
                  <span className="font-bold"> $200 B.</span>
                </p>
                <p className="w-[70%] mt-3 pb-8">
                  This is an
                  <u className="text-blue-700 text-underline">
                    arbitrage opportunity
                  </u>
                  , with the max gain being %X if the deal closes, but the
                  possible risk is %Y if the deal fails, if the deal success is
                  % and therefore the recommended play is
                  <u className="text-blue-700 text-underline">long/short</u>
                  $ABC
                </p>

                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openFilter && (
        <div
          onClick={() => setOpenFilter(false)}
          className="absolute inset-0 backdrop-blur-sm lg:hidden"
        ></div>
      )}

      {openFilter && (
        <div className="bg-[#181818] overflow-y-scroll h-[90vh]  left-1/2 transform -translate-x-1/2 rounded-xl lg:hidden absolute top-10 ">
          <img
            onClick={() => setOpenFilter(false)}
            className="ms-auto h-fit mt-5 me-6 w-4 cursor-pointer"
            src="src/assets/exit.svg"
            alt="exit"
          />
          <div className="mx-auto">
            <Filter />
          </div>
        </div>
      )}

      <div className="bg-[#202020] basis-[30%] min-[1600px]:basis-[27%] h-screen hidden lg:block">
        <Filter />
      </div>
    </section>
  );
}

export default App;
