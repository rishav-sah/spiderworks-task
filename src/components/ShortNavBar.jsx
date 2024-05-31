import { useState } from "react";
import appLogo from "../assets/icons/logo-main.svg";
import SearchIconNormal from "../assets/icons/search-normal.svg";
import {
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const ShortNavBar = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  const toggleMenuFlag = () => {
    setMenuFlag(!menuFlag);
  };

  const navList = [
    "Learn",
    "How do I participate",
    "Universities",
    "Corporate",
  ];

  return (
    <div className="fixed left-0 top-0 z-10 mt-4 grid w-full place-items-center">
      <div className="z-[1] flex items-center justify-between rounded-lg border border-gray-500 px-4 shadow-md backdrop-blur-sm backdrop-filter sm:w-[640px]">
        <div>
          <img className="w-7" src={appLogo} alt="logo-main" />
        </div>
        <div>
          <button
            className="rounded-full bg-black px-4 py-2 text-xs text-white"
            type="button"
            onClick={toggleMenuFlag}
          >
            <Bars3Icon className="mr-2 inline size-4" />
            Menu
          </button>
        </div>
        <div>
          <button
            className="rounded-full border-2 border-sky-800 px-4 py-2 text-xs text-black"
            type="button"
          >
            <ChatBubbleLeftEllipsisIcon className="mr-2 inline size-4" />
            Discuss CPT
          </button>
        </div>
        <div className="relative hover:cursor-pointer">
          <svg
            width="150"
            height="50"
            viewBox="0 0 213 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M189 0C202.255 0 213 10.7452 213 24C213 37.2548 202.255 48 189 48H75C65.3296 48 56.9951 42.2806 53.1945 34.0399C52.7386 33.0512 50.6816 33.1066 50.2843 34.1202C46.64 43.4169 37.5888 50 27 50H25C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0H27C37.2199 0 46.0076 6.13243 49.8839 14.9183C50.3234 15.9144 52.381 15.883 52.7951 14.8761C56.386 6.14629 64.9752 0 75 0H189Z"
              fill="#161226"
            />
          </svg>
          <span className="absolute left-[5px] top-[11px] text-xs text-white">
            <img
              src={SearchIconNormal}
              className="mr-5 inline rounded-full bg-white p-1.5"
              alt="join-program"
            />
            Join Program
          </span>
        </div>
      </div>
      <div
        className={`duration-3000 overflow-hidden transition-all ease-in ${
          menuFlag ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="mt-2 rounded-lg border border-gray-300 bg-white p-4 shadow-md">
          {navList.map((item, index) => (
            <li key={index} className="cursor-pointer">
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShortNavBar;
