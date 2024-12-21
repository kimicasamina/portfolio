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
    <div className="w-full h-[480px] mx-auto ">
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
                className="w-full h-[480px] rounded-lg object-contain "
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
