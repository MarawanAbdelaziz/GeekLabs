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

function Filter() {
  const [filterApplied, setFilterApplied] = useState([]);

  return (
    <div>
      <div className="bg-[#181818] lg:h-[95vh] lg:mt-7 lg:ms-10 rounded-l-xl">
        <div className="text-center font-poppins font-semibold mx-5 pt-4 lg:pt-7">
          <h2 className="text-3xl mb-5">Filters</h2>
          <div className="flex justify-between">
            <h5>Filters Applied</h5>
            <button onClick={() => setFilterApplied([])} className="me-3">
              Clear All
            </button>
          </div>
          <div className="bg-[#202020] mt-1  rounded-lg w-full h-16 font-normal text-sm pt-0.5 text-left overflow-y-scroll no-scrollbar::-webkit-scrollbar no-scrollbar">
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
        <div className="mt-3 bg-[#202020]  font-poppins font-semibold rounded-lg mx-5">
          <h3 className="pt-4 ms-5">Stock</h3>
          <div className="bg-[#313131] mx-7 rounded-md mt-2 px-4 py-0.5">
            <input
              className="bg-[url('src/assets/Filters/search.svg')] border-none w-full bg-right bg-no-repeat placeholder:text-sm text-sm bg-[#313131] placeholder:text-[#737373] focus:outline-none"
              type="text"
              placeholder="$ TICKER"
            />
          </div>
          <div className="flex items-center">
            <img
              className="ms-8 mt-4 scale-110"
              src="src/assets/Filters/Vector.svg"
              alt=""
            />
            <h3 className="pt-4 ms-1">Industry</h3>
          </div>
          <div className="flex justify-center font-normal text-sm">
            <div className="basis-[54%] border-l ms-3 mt-2 pt-2 ">
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
                  <h5 className="group-hover:text-black">{industry.name}</h5>
                </button>
              ))}
            </div>
            <div className="basis-[37%] h-fit border-l mt-2 pt-2 ">
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

          <div className="flex mt-5 font-normal">
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

          <div className="flex mt-5 font-normal"></div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
