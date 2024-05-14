import { useState } from "react";
import logoImg from "../assets/streetSuiteLogo-04.svg";
import { motion } from "framer-motion";

const variants = {
  openDiv: {
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 80,
    },
  },
  closeDiv: {
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 80,
    },
  },
};

function SideBar() {
  const [openDiv, setOpenDiv] = useState(false);

  const mouseEnterDiv = () => {
    setOpenDiv(true);
  };
  const mouseLeaveDiv = () => {
    setOpenDiv(false);
  };
  return (
    <motion.div
      onMouseEnter={mouseEnterDiv}
      onMouseLeave={mouseLeaveDiv}
      variants={variants}
      animate={openDiv ? "openDiv" : "closeDiv"}
    >
      <nav
        className={` ${
          openDiv ? "w-64" : "w-20"
        } bg-[#181818] absolute left-3 top-0 bottom-0 duration-1000 rounded-xl `}
      >
        <div className={`${openDiv && "ms-6 me-5"} `}>
          <div className={`${openDiv ? "mb-8" : "mb-[30px]"} `}>
            <div className={`w-[80%] mx-auto`}>
              <img className={` w-full pt-10`} src={logoImg} alt="logo" />
            </div>

            <div className="flex-col mt-20 ms-6">
              <div className="flex group justify-start mb-7 items-center">
                <img
                  className={` ${
                    openDiv ? "scale-125" : "scale-[1.45] ms-1.5"
                  } me-4  icon-color transition-transform duration-1000`}
                  src="src/assets/nav/alert.svg"
                  alt="alert"
                />

                <h4
                  className={`text-2xl font-semibold group-hover:text-[#53ACFF] ${
                    openDiv ? "opacity-100" : "opacity-0 "
                  } duration-1000 overflow-x-scroll no-scrollbar`}
                >
                  Alerts
                </h4>
              </div>

              <div className="flex group justify-start mb-7 items-center">
                <img
                  className={` ${
                    openDiv ? "scale-[1.2]" : "scale-[1.4] ms-1.5"
                  } me-4 icon-color transition-transform duration-1000`}
                  src="src/assets/nav/training.svg"
                  alt="Training"
                />

                <h4
                  className={`text-2xl font-semibold group-hover:text-[#53ACFF] ${
                    openDiv ? "opacity-100" : "opacity-0 "
                  } duration-1000 overflow-x-scroll no-scrollbar`}
                >
                  Training
                </h4>
              </div>

              <div className="flex justify-start mb-7 items-center group relative">
                <img
                  className={`${
                    openDiv ? "scale-[1.17] " : "scale-[1.4] ms-1"
                  }  me-4 transition group-hover:opacity-0 opacity-100  duration-1000`}
                  src="src/assets/nav/automation.svg"
                  alt="automation"
                />
                <h4
                  className={`text-2xl font-semibold text-[#5D5D5D] ${
                    openDiv ? "opacity-100" : "opacity-0"
                  } duration-1000 overflow-x-scroll no-scrollbar`}
                >
                  Automation
                </h4>

                <div
                  className={` ${
                    openDiv
                      ? "absolute inset-0 group-hover:bg-[#53ACFF] group-hover:blur-md group-hover:backdrop-blur-lg  hover:bg-opacity-60 rounded-lg hover:shadow-[0_0px_30px_-1px_rgba(83,172,255,1)] duration-500  group flex justify-center items-center"
                      : "hidden"
                  } `}
                ></div>
                <h5 className="group-hover:opacity-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 text-nowrap duration-500 ">
                  Coming Soon
                </h5>
              </div>

              <div className="flex justify-start mb-7 items-center group relative">
                <img
                  className={` ${
                    openDiv ? "scale-100" : "scale-[1.25] ms-1"
                  } me-4 basis-7 transition duration-1000`}
                  src="src/assets/nav/portfoilo.svg"
                  alt="trading"
                />

                <h4
                  className={`text-2xl font-semibold text-[#5D5D5D] ${
                    openDiv ? "opacity-100" : "opacity-0 "
                  } duration-1000 overflow-x-scroll no-scrollbar`}
                >
                  Portfolio
                </h4>

                <div
                  className={` ${
                    openDiv
                      ? "absolute inset-0 group-hover:bg-[#53ACFF] group-hover:blur-md group-hover:backdrop-blur-lg  hover:bg-opacity-60 rounded-lg hover:shadow-[0_0px_30px_-1px_rgba(83,172,255,1)] duration-500  group flex justify-center items-center"
                      : "hidden"
                  } `}
                ></div>
                <h5 className="group-hover:opacity-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 text-nowrap duration-500 ">
                  Coming Soon
                </h5>
              </div>

              <div className="flex justify-start mb-7 items-center group relative">
                <img
                  className={` ${
                    openDiv ? "scale-100" : "scale-[1.2] ms-1"
                  } me-4 basis-7 transition duration-1000`}
                  src="src/assets/nav/trading.svg"
                  alt="trading"
                />

                <h4
                  className={`text-2xl font-semibold text-[#5D5D5D] ${
                    openDiv ? "opacity-100" : "opacity-0 "
                  } duration-1000 overflow-x-scroll no-scrollbar`}
                >
                  Trading
                </h4>

                <div
                  className={` ${
                    openDiv
                      ? "absolute inset-0 group-hover:bg-[#53ACFF] group-hover:blur-md group-hover:backdrop-blur-lg  hover:bg-opacity-60 rounded-lg hover:shadow-[0_0px_30px_-1px_rgba(83,172,255,1)] duration-500  group flex justify-center items-center"
                      : "hidden"
                  } `}
                ></div>
                <h5 className="group-hover:opacity-100 opacity-0 absolute left-1/2 transform -translate-x-1/2 text-nowrap duration-500 ">
                  Coming Soon
                </h5>
              </div>
            </div>
          </div>

          <div
            className={`absolute bottom-12 sm:bottom-8 left-1/2 transform -translate-x-1/2 ${
              openDiv ? "w-48" : "w-10"
            } duration-1000  `}
          >
            <div className="flex justify-center">
              <img
                className="basis-1/4"
                src="src/assets/nav/user.svg"
                alt="uesr"
              />

              <div
                className={` ${
                  openDiv ? "" : "hidden"
                }  ms-5 basis-3/4 font-semibold duration-1000 overflow-x-scroll no-scrollbar`}
              >
                <h5 className="text-nowrap">Moni Roy</h5>
                <h5 className="text-[#979797]">Beginner</h5>
              </div>
            </div>

            <h5
              className={` ${
                openDiv ? "" : "hidden"
              } text-[#424242] text-nowrap text-center mt-5 duration-1000 overflow-x-scroll no-scrollbar`}
            >
              Street Suite. 2.0
            </h5>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default SideBar;
