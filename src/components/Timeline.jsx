import { useState } from "react";
import TimelineCard from "./TimelineCard";
import { FaArrowDown } from "react-icons/fa";

const BasicTimeline = ({ name, items }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <article>
      <h3 className="mb-4 text-lg font-bold">{name}</h3>
      <ol className="relative ml-1 border-s border-slate-900">
        {items.slice(0, showAll ? items.length : 2).map((item, index) => (
          <TimelineCard key={index} item={item} />
        ))}
      </ol>

      <div className="inline-flex w-full justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-3xl border px-8 py-1.5 transition duration-300 ease-in-out hover:bg-theme-purple"
        >
          {showAll ? "Show Less" : `Show All (${items.length})`}
        </button>
      </div>
    </article>
  );
};

export default BasicTimeline;
