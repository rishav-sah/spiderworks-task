import chatIcon from "../assets/icons/chat.svg";

const Topics = () => {
  const listOfTopics = [
    "Eligibility",
    "F1 Visa Students",
    "Universities",
    "Admission",
    "Companies",
    "Jobs",
  ];
  return (
    <section className="bg-[#FFF9E3] px-8 py-16">
      <div className="text-center">
        <h1 className="mb-4 text-sm font-light">TOPICS</h1>
        <h2 className="mb-4 text-4xl">Most Searched Ones</h2>
      </div>

      <div className="my-8 grid place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {listOfTopics.map((topic) => (
          <div
            key={topic}
            className="flex h-36 w-80 cursor-pointer items-center justify-center rounded-lg bg-[#161226] text-white"
          >
            <span className="text-2xl">{topic}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <span>Didn't find your topic?</span>
        <img className="mx-2 inline" src={chatIcon} alt="" />
        <span className="italic cursor-pointer">Start discussing</span>
      </div>
    </section>
  );
};

export default Topics;
