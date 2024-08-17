import React, { useEffect } from "react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel({ images, live_url, github_link }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  return (
    <div className="w-full max-w-[80%] mx-auto ">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div className="">
            <a
              href={live_url}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 sm:order-1 shadow-xl hover:shadow-2xl hover:scale-105 hover:ease-in-out hover:duration-150 "
            >
              <img
                src={image}
                alt=""
                className="w-full h-full rounded-lg object-contain "
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// return (
//   <div className="w-full min-h-[100vh] mb-4 relative bg-red-500">
//     {images.map((image, i) => (
//       <img
//         src={image}
//         alt=""
//         key={i}
//         ref={(el) => slides.current.push(el)}
//         className="absolute rounded-md m-auto left-0 right-0 h-full object-contain "
//       />
//     ))}

//     {/* ------------ PREV AND NEXT BUTTON  -------- */}
//     <div className="w-full absolute z-5 flex justify-between items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 ">
//       <button className="" onClick={(e) => prevSlide()}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="size-6 cursor-pointer w-12 h-12 rounded-full slider-btn bg-gray-800 text-gray-200 p-1 hover:bg-gray-600/80 "
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
//           />
//         </svg>
//       </button>

//       <button className="" onClick={(e) => nextSlide()}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="size-6 cursor-pointer w-12 h-12 rounded-full slider-btn bg-gray-800 text-gray-200 p-1 hover:bg-gray-600/80 "
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>
// );
export default Carousel;
