import SlideCard from "./SlideCard";

const Slideshow = ({ name, items }) => {
  return (
    <article className="min-w-0">
      <style>
        {`
          .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: #4b5563; /* Gray-500 */
            border-radius: 0px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background-color: #d1d5db; /* Gray-300 */
          }
        `}
      </style>
      <h3 className="text-lg font-bold text-gray-800 mb-4">{name}</h3>
      <section className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 gap-4">
        {items.map((item, index) => (
          <SlideCard key={index} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Slideshow;
