import { useState } from "react";

const industry1 = [
  {
    src: "src/assets/Industry/HealthCare.svg",
    name: "Health Care",
  },
  {
    src: "src/assets/Industry/Materials.svg",
    name: "Materials",
  },
  {
    src: "src/assets/Industry/Energy.svg",
    name: "Energy",
  },
  {
    src: "src/assets/Industry/ConsumerDis.svg",
    name: "Consumer Discretionary",
  },
  {
    src: "src/assets/Industry/ConsumerSta.svg",
    name: "Consumer Staples",
  },
  {
    src: "src/assets/Industry/RealEstate.svg",
    name: "Real Estate",
  },
];

const industry2 = [
  {
    src: "src/assets/Industry/it.svg",
    name: "it",
  },
  {
    src: "src/assets/Industry/Communication.svg",
    name: "Communication",
  },
  {
    src: "src/assets/Industry/industrials.svg",
    name: "Industrials",
  },
  {
    src: "src/assets/Industry/utilities.svg",
    name: "Utilities",
  },
  {
    src: "src/assets/Industry/financials.svg",
    name: "Financials",
  },
];

// const StrategyButton = [];

function Filter() {
  const [filterApplied, setFilterApplied] = useState([]);

  return (
    <div>
      <div className="bg-[#181818] lg:h-[95vh] lg:mt-7 lg:ms-10 rounded-l-xl overflow-y-scroll no-scrollbar::-webkit-scrollbar">
        <div className="text-center font-poppins font-semibold mx-5 pt-4 lg:pt-7">
          <h2 className="text-3xl mb-2">Filters</h2>
          <div className="flex justify-between">
            <h5>Filters Applied</h5>
            <button onClick={() => setFilterApplied([])} className="me-3">
              Clear All
            </button>
          </div>
          <div className="bg-[#202020] mt-1  rounded-lg w-full h-16 font-normal text-xs md:text-sm lg:text-base pt-0.5 text-left overflow-y-scroll  no-scrollbar">
            {filterApplied?.map((Applied) => (
              <button
                key={Applied.name}
                onClick={() => {
                  setFilterApplied(
                    filterApplied.filter(
                      (filtter) => filtter.name != Applied.name
                    )
                  );
                }}
                className="ms-2 rounded-md px-1 group mb-1.5 text-black bg-[#53ACFF] mt-1 "
              >
                {Applied.name} X
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3 bg-[#202020]  font-poppins font-semibold md:text-sm lg:text-base rounded-lg mx-5">
          <h3 className="pt-4 ms-5">Stock</h3>
          <div className="bg-[#313131] mx-7 rounded-md mt-2 px-4 py-0.5">
            <input
              className="bg-[url('src/assets/Filters/search.svg')] border-none w-full bg-right bg-no-repeat placeholder:text-sm md:text-sm lg:text-base bg-[#313131] placeholder:text-[#737373] focus:outline-none"
              type="text"
              placeholder="$ TICKER"
            />
          </div>
          <div className="flex items-center">
            <img
              className=" ms-3 md:ms-4 lg:ms-8 mt-4 scale-110"
              src="src/assets/Filters/Vector.svg"
              alt=""
            />
            <h3 className="pt-4 ms-1">Industry</h3>
          </div>

          <div className="flex lg:block  min-[1400px]:flex justify-center font-normal text-[10px] md:text-xs  min-[1600px]:text-sm">
            <div className="w-fit border-l ms-3 lg:ms-6 mt-2 pt-2 pe-4 lg:pe-3 ">
              {industry1?.map((industry) => (
                <button
                  onClick={() => {
                    if (
                      filterApplied.filter(
                        (Applied) => Applied.name == industry.name
                      ).length == 0
                    ) {
                      setFilterApplied([
                        ...filterApplied,
                        { name: industry.name },
                      ]);
                    }
                  }}
                  key={industry.name}
                  className="flex items-center ms-2 rounded-md px-1 group mb-1.5 hover:bg-[#53ACFF]"
                >
                  <img
                    className="me-2 icon-color-Filters"
                    src={industry.src}
                    alt={industry.name}
                  />
                  <h5 className="group-hover:text-black text-nowrap">
                    {industry.name}
                  </h5>
                </button>
              ))}
            </div>
            <div className="w-fit h-fit border-l mt-2 pt-2 me-5  ms-6 min-[1400px]:ms-0">
              {industry2?.map((industry) => (
                <button
                  onClick={() => {
                    if (
                      filterApplied.filter(
                        (Applied) => Applied.name == industry.name
                      ).length == 0
                    ) {
                      setFilterApplied([
                        ...filterApplied,
                        { name: industry.name },
                      ]);
                    }
                  }}
                  key={industry.name}
                  className="flex items-center ms-2 rounded-md px-1 group mb-1.5 hover:bg-[#53ACFF]"
                >
                  <img
                    className="me-2 icon-color-Filters"
                    src={industry.src}
                    alt={industry.name}
                  />
                  <h5 className="group-hover:text-black">{industry.name}</h5>
                </button>
              ))}
            </div>
          </div>

          <div className="flex lg:block min-[1400px]:flex mt-5 font-normal">
            <div className="basis-2/4 ">
              <div className="flex items-center mb-4">
                <img
                  className="ms-8 mt-4 scale-110"
                  src="src/assets/Filters/Vector.svg"
                  alt=""
                />
                <h3 className="pt-4 ms-1 font-semibold">Market Cap</h3>
              </div>
              <div className="flex items-center mb-1">
                <input
                  className="w-4 ms-11 me-3 bg-[#494949] radio-custom border-[#494949]"
                  type="radio"
                  name="marketCap"
                  id="Micro"
                />
                <label htmlFor="Micro" className="group-hover:text-black w-fit">
                  Micro
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  className="w-4 ms-11 me-3 bg-[#494949] radio-custom border-[#494949]"
                  type="radio"
                  name="marketCap"
                  id="Small"
                />
                <label htmlFor="Small" className="group-hover:text-black w-fit">
                  Small
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="w-4 ms-11 me-3 bg-[#494949] radio-custom border-[#494949]"
                  type="radio"
                  name="marketCap"
                  id="Large"
                />
                <label htmlFor="Large" className="group-hover:text-black w-fit">
                  Large
                </label>
              </div>
            </div>
            <div className="basis-2/4 ">
              <div className="flex items-center mb-4">
                <img
                  className="ms-8 mt-4 scale-110"
                  src="src/assets/Filters/Vector.svg"
                  alt=""
                />
                <h3 className="pt-4 ms-1 font-semibold">Risk Level</h3>
              </div>
              <div className="flex items-center mb-1">
                <input
                  className="w-4 ms-11 me-3 bg-[#494949] radio-custom border-[#494949]"
                  type="radio"
                  name="risk"
                  id="Low Risk"
                />
                <label
                  htmlFor="Low Risk"
                  className="group-hover:text-black w-fit"
                >
                  Low Risk
                </label>
              </div>
              <div className="flex items-center mb-1">
                <input
                  className="w-4 ms-11 me-3 bg-[#494949] radio-custom border-[#494949]"
                  type="radio"
                  name="risk"
                  id="Mid Risk"
                />
                <label
                  htmlFor="Mid Risk"
                  className="group-hover:text-black w-fit"
                >
                  Mid Risk
                </label>
              </div>
              <div className="flex items-center">
                <input
                  className="w-4 ms-11 me-3 bg-[#494949] radio-custom border-[#494949]"
                  type="radio"
                  name="risk"
                  id="High Risk"
                />
                <label
                  htmlFor="High Risk"
                  className="group-hover:text-black w-fit"
                >
                  High Risk
                </label>
              </div>
            </div>
          </div>

          <div className="flex mt-5 font-normal pb-3">
            <div>
              <h3 className="pt-4 ms-5 text-lg font-semibold text-center mb-3">
                Strategy
              </h3>
              <div className=" ms-10 py-2 px-3 overflow-y-scroll h-20  no-scrollbar  ">
                <button className="block mb-1.5 text-white/[0.5] ">
                  Big Option Buys
                </button>
                <button className=" block bg-[#53ACFF] px-1 rounded-md mb-1.5">
                  Merger Arbitage
                </button>
                <button className="block text-white/[0.5] ">
                  Short Reports
                </button>
              </div>
            </div>
            <div className="lg:ms-10 ms-5 me-5">
              <h3 className="pt-4 ms-5 text-lg font-semibold text-center mb-3">
                Asset
              </h3>
              <div className=" ms-10 p-3 overflow-y-scroll h-20  no-scrollbar ">
                <button className="block mb-1.5 text-white/[0.5]">
                  Stocks
                </button>
                <button className=" block bg-[#53ACFF] px-1 rounded-md mb-1.5">
                  Option
                </button>
                <button className="block text-white/[0.5] ">Futures</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:block mt-2 w-full justify-center items-center pb-5">
          <button className=" lg:hidden lg:ms-24 2xl:ms-32 min-[1600px]:ms-40 mt-3  rounded-lg py-1 px-2 me-8 border bg-transparent">
            Save Filter
          </button>

          <button className="lg:ms-24 2xl:ms-32 min-[1600px]:ms-40 mt-3 lg:text-3xl rounded-lg py-1 px-5 lg:px-10 bg-[#53ACFF]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
