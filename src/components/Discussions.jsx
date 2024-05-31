import { DiscussionsList } from "../utils/constants";
import ContributorCard from "./ContributorCard";
import DiscussionCard from "./DiscussionCard";
import GuideCard from "./GuideCard";
import { LightBulbIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const Discussions = () => {
  return (
    <section className="p-10 xl:flex xl:justify-between">
      <div className="w-full xl:mr-10 xl:w-3/4">
        <div>
          <div className="mb-10 w-full sm:flex sm:items-center sm:justify-between">
            <div className="text-xs uppercase text-[#0A090E]">
              <span className="">Latest dicussions as of </span>
              <span className="mx-2 bg-[#B31942] px-2"></span>
              <span>March 12 2024</span>
            </div>
            <div className="mt-4 md:m-0">
              <button
                className="rounded-full bg-[#BEDFFF] px-4 py-2"
                type="button"
              >
                <LightBulbIcon className="inline size-4 text-[#0183FF]" />
                <span className="ml-2 mr-3 text-xs uppercase">All Topics</span>
                <ChevronDownIcon className="inline size-4 text-[#0A090E]" />
              </button>
            </div>
          </div>
          <div className="mb-4 w-full px-2">
            <SearchBar />
          </div>
        </div>
        {/* Comments Section */}
        {DiscussionsList.map((info) => (
          <DiscussionCard key={info.id} info={info} />
        ))}
      </div>
      {/* Cards Section */}
      <div className="mx-2 mt-10 grid w-full place-items-center md:flex md:justify-evenly xl:block xl:w-1/4">
        <div className="xl:mb-10">
          <ContributorCard />
        </div>
        <div>
          <GuideCard />
        </div>
      </div>
    </section>
  );
};

export default Discussions;
