// const Slideshow = ({ name, data }) => {
//   return (
//     <article>
//       <h3>{name}</h3>
//       <section>
//         {data.map((item, index) => (
//           <div key={index}>
//             <img src={item.image} alt="" />

//             {/* text area */}
//             <div> 
//               <h4>{item.title}</h4>
//               <p>{item.description}</p>
//             </div>

//             {item.tags && item.tags.map((tag, i) => (
//               <div key={i}>
//                 <p>{tag}</p>
//               </div>
//             ))}

//           </div>
//         ))}
//       </section>
//     </article>
//   )
// }

// export default Slideshow

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slideshow = ({ name, items }) => {
  return (
    <article className="min-w-0">
      <h3>{name}</h3>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true, type: 'progressbar' }}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >

        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="">
              <img
                src={item.image}
                alt={item.title}
                className=""
              />

              {/* texts */}
              <h3 className="">{item.title}</h3>
              <p className="">{item.description}</p>

              {/* tags */}
              <div className="">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className=""
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default Slideshow