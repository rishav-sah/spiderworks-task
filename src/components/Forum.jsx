import ChatIcon from "../assets/icons/chat.svg";
import BulbIcon from "../assets/icons/bulb.svg";
import Group from "../assets/images/group-frame.png";
import SearchBar from "./SearchBar";
import ArrowDownIcon from "../assets/icons/arrow-down.svg";

const Forum = () => {
  return (
    <section className="w-full">
      <div className="p-4 text-center md:p-10">
        <p className="text-left text-[10px] text-[#0A090E80]">Home/Forum</p>
        <h1 className="mb-4 text-sm font-light">FORUM</h1>
        <h2 className="mb-4 text-4xl">Discuss & Evolve</h2>
        <p className="mb-4 text-[#0A090E9C]">
          Engage with Fellow Professionals: Join the Program Forum Discussion!
        </p>
        <div className="mx-auto max-w-96">
          <SearchBar />
        </div>
        <div className="mx-auto mb-8 flex items-center justify-center">
          <div className="mx-4">
            <img
              className="inline rounded-xl bg-[#FFF2F6] px-1.5 py-0.5 md:px-3 md:py-2"
              src={ChatIcon}
              alt="chat"
            />
            <span className="ml-4 text-xs md:text-base">START DISCUSSING</span>
          </div>
          <div className="mt-14">
            <p className="text-xl text-[#6B6097]">&#x2022;</p>
            <img className="mt-5" src={ArrowDownIcon} alt="" />
          </div>
          <div className="mx-4">
            <img
              className="inline rounded-xl bg-[#BEDFFF] px-1.5 py-0.5 md:px-3 md:py-2"
              src={BulbIcon}
              alt="bulb"
            />
            <span className="ml-4 text-xs md:text-base">VIEW TOPICS</span>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <img className="w-full" src={Group} alt="" />
      </div>
    </section>
  );
};

export default Forum;
