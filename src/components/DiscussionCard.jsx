import chatIcon from "../assets/icons/chat.svg";

const DiscussionCard = ({ info }) => {
  const { imageUrl, postedBy, question, responses } = info;
  const handleClick = () => {};
  return (
    <div className="border-b-2 py-2 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <div className="w-11">
          <img className="w-full" src={imageUrl} alt={postedBy} />
        </div>
        <div className="ml-4">
          <h3>{question}</h3>
          <p className="text-xs text-[#0A090E9C]">Posted by {postedBy}</p>
        </div>
      </div>
      <div className="my-4 md:m-0">
        <span className="mr-2 cursor-pointer rounded-full bg-[#F2EFFF] px-6 py-4 text-[9px]">
          <img className="mr-1 inline" src={chatIcon} alt={responses} />
          {responses} RESPONSES
        </span>
        <button
          onClick={handleClick}
          className="ml-2 rounded-md bg-black px-6 py-3 text-sm text-white"
          type="button"
        >
          View Answer
        </button>
      </div>
    </div>
  );
};

export default DiscussionCard;
