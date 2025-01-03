import React from "react";

const SlideCard = ({ item }) => {
  return (
    <div className="snap-center flex-shrink-0 w-full sm:w-80  p-4 border rounded-lg shadow-md mb-6 hover:shadow-lg group hover:bg-light-theme-purple transition duration-300 ease-in-out flex flex-col gap-2">
      <img
        src={item.image}
        alt={item.title}
        className="w-full max-w-80 h-48 object-cover rounded-md mb-4"
      />

      {/* Text */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-xs text-slate-600">{item.subtitle}</p>
      </div>
      <p className="text-sm">{item.description}</p>

      
      <div className="flex flex-wrap gap-2 mt-4">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium bg-light-theme-purple group-hover:bg-white rounded-full border "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlideCard;
