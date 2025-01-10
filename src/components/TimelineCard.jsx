import { FaArrowRight } from "react-icons/fa";

const TimelineCard = ({ item }) => {
  return (
    <li className="mb-6 ms-6">
      <div className="absolute -start-[6.6px] mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-900"></div>
      <time className="text-sm text-slate-600">{item.date}</time>
      <h3 className="text-lg font-semibold">{item.position}</h3>
      <h5 className="text-sm font-semibold text-slate-900">{item.company}</h5>
      <ul className="mb-4 mt-2 list-inside list-disc text-slate-900">
        {item.description.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
      {item.link && (
        <a
          href="#"
          className="inline-flex items-center rounded-3xl border border-slate-600 bg-white px-8 py-1.5 text-sm font-medium text-slate-600 transition duration-300 hover:bg-med-theme-purple"
        >
          Learn more
          <FaArrowRight className="ml-2" />
        </a>
      )}
    </li>
  );
};

export default TimelineCard;
