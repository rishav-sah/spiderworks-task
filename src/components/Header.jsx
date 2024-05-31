import appLogo from "../assets/icons/logo-main.svg";
import Navbar from "./Navbar";
import union from "../assets/icons/Union.svg";
import SearchIconNormal from "../assets/icons/search-normal.svg";
import ShortNavBar from "./ShortNavBar";

const Header = () => {
  return (
    <>
      <header className="hidden items-center justify-between border-b-2 px-8 py-6 lg:flex">
        <div>
          <img src={appLogo} alt="logo-main" />
        </div>
        <Navbar />
        <div className="relative hover:cursor-pointer">
          <img src={union} alt="union" />
          <span className="absolute left-[7px] top-1.5 text-white">
            <img
              src={SearchIconNormal}
              className="mr-8 inline rounded-full bg-white p-3"
              alt="join-program"
            />
            Join Program
          </span>
        </div>
      </header>
      <div className="lg:hidden">
        <ShortNavBar />
      </div>
    </>
  );
};

export default Header;
