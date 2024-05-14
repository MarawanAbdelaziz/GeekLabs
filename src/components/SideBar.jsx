import { useState } from "react";
import logoImg from "../assets/streetSuiteLogo-04.png";
import { motion } from "framer-motion";

const variants = {
  openDiv: {
    width: 256,
    position: "fixed",
    left: 12,
    top: 0,
    bottom: 0,
    backgroundColor: "#181818",
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 80,
    },
  },
  closeDiv: {
    width: 80,
    position: "fixed",
    left: 12,
    top: 0,
    bottom: 0,
    backgroundColor: "#181818",
    transition: {
      type: "spring",
      duration: 0.5,
      stiffness: 40,
    },
  },

  openH4: {
    display: "block",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  closeH4: {
    opacity: 0,
    transition: {
      duration: 1,
    },
    transitionEnd: {
      display: "none",
    },
  },

  openImageScale: {
    transition: {
      duration: 1,
      scale: 1,
    },
  },
  closeImageScale: {
    transition: {
      duration: 1,
      scale: 0.5,
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
      <nav className={` rounded-xl `}>
        <div className={` ${openDiv && "ms-6 me-5"} `}>
          <div className={`${openDiv ? "mb-80" : "mb-[430px]"} `}>
            <motion.div
              animate={openDiv ? "openImageScale" : "closeImageScale"}
              variants={variants}
            >
              <div className={` w-[80%] mx-auto`}>
                <img className={` w-full pt-10`} src={logoImg} alt="logo" />
              </div>
            </motion.div>

            <div className="flex-col mt-20 ms-6">
              <div className="flex group justify-start mb-7 items-center">
                <img
                  className={` ${
                    openDiv ? " " : "scale-150 duration-500 ms-2"
                  } me-4 w-[25px] icon-color text-xs transition-transform duration-1000`}
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
                    openDiv ? "" : "scale-[1.4] ms-1.5"
                  } me-4 w-[25px] icon-color text-xs  transition-transform duration-1000`}
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

              <div className="flex justify-start mb-7 items-center relative">
                <img
                  className={`${
                    openDiv ? "scale-[1.2] " : "scale-[1.4] ms-1"
                  }  me-4 transition duration-1000`}
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
                      ? "absolute inset-0 hover:bg-[#53ACFF]  hover:bg-opacity-60 rounded-lg hover:shadow-[0_0px_30px_-1px_rgba(83,172,255,1)] duration-500  group flex justify-center items-center"
                      : "hidden"
                  } `}
                >
                  <h5 className="group-hover:opacity-100  duration-500 opacity-0">
                    Coming Soon
                  </h5>
                </div>
              </div>

              <div className="flex justify-start mb-7 items-center">
                <img
                  className={` ${
                    openDiv ? "scale-105" : "scale-[1.25] ms-1"
                  } transition duration-1000 me-4 w-[30px]`}
                  src="src/assets/nav/portfoilo.svg"
                  alt="portfoilo"
                />

                <h4
                  className={`text-2xl font-semibold text-[#5D5D5D] ${
                    openDiv ? "opacity-100" : "opacity-0 "
                  } duration-1000 overflow-x-scroll no-scrollbar`}
                >
                  Portfolio
                </h4>
              </div>

              <div className="flex justify-start mb-7 items-center">
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
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <img
                className="basis-1/4"
                src="src/assets/nav/user.svg"
                alt="uesr"
              />

              <motion.div
                animate={openDiv ? "openH4" : "closeH4"}
                variants={variants}
              >
                <div className="ms-5 basis-3/4 font-semibold">
                  <h5>Moni Roy</h5>
                  <h5 className="text-[#979797]">Beginner</h5>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={openDiv ? "openH4" : "closeH4"}
              variants={variants}
            >
              <h5 className="text-[#424242] text-center mt-5">
                Street Suite. 2.0
              </h5>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default SideBar;
