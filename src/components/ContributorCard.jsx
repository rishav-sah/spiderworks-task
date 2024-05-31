import TopContributor from "../assets/images/top-contributor.png";

const ContributorCard = () => {
  return (
    <div className="my-4 h-[485px] w-80 bg-[#FFEADE8C] py-8 text-center shadow">
      <div className="border-b-2">
        <h2 className="text-2xl">Top Contributor</h2>
        <p className="text-2xl italic">this Week</p>
        <div className="m-auto my-4 w-40">
          <img className="w-full" src={TopContributor} alt="top-contributor" />
          <span className="text-xl">Jishnu Ambadi</span>
        </div>
      </div>
      <div className="mt-4 px-4">
        <p>
          You can be next one! Be a part of USA’s 1<sup>st</sup> CPT Program
          Directory!
        </p>
        <button
          className="mt-4 rounded-full bg-gradient-to-r from-sky-950 to-purple-950 px-10 py-4 text-white"
          type="button"
        >
          Join Community and Ask
        </button>
      </div>
    </div>
  );
};

export default ContributorCard;
