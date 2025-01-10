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
      <h3 className="mb-4 text-lg font-bold">{name}</h3>
      <section className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 flex snap-x snap-mandatory gap-4 overflow-x-auto">
        {items.map((item, index) => (
          <SlideCard key={index} item={item} />
        ))}
      </section>
    </article>
  );
};

export default Slideshow;
