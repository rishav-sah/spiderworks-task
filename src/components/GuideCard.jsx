import GuideImage from "../assets/images/guide.png";
import ArrowRightIcon from "../assets/icons/arrow-right.svg";
const GuideCard = () => {
  return (
    <div className="my-4 h-[485px] w-80 bg-gradient-to-r from-sky-950 to-purple-950 py-8 text-center text-white shadow">
      <div className="relative m-auto mb-4 w-40">
        <img className="w-full" src={GuideImage} alt="guide-portrait" />
        <span className="text-sm">E-BOOK</span>
      </div>
      <div className="mb-4 px-2 text-xl">
        <p>Charting Paths:Program Through a Student's Eyes</p>
        <button
          className="mt-4 rounded-full border-2 border-[#FFF9E3] px-6 py-3 text-[#FFF9E3]"
          type="button"
        >
          Get the Guide
          <img className="ml-4 inline" src={ArrowRightIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default GuideCard;
