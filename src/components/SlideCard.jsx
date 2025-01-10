import React from "react";

const SlideCard = ({ item }) => {
  return (
    <div className="group mb-6 flex w-full flex-shrink-0 snap-center flex-col gap-2 rounded-lg border p-4 shadow-md transition duration-300 ease-in-out hover:bg-light-theme-purple hover:shadow-lg sm:w-80">
      <img
        src={item.image}
        alt={item.title}
        className="mb-4 h-40 w-full max-w-80 rounded-md object-cover"
      />

      {/* Text */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-xs text-slate-600">{item.subtitle}</p>
      </div>
      <p className="text-sm">{item.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className="rounded-full border bg-light-theme-purple px-3 py-1 text-xs font-medium group-hover:bg-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlideCard;
