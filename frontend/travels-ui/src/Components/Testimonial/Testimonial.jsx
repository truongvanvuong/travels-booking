import { useRef } from "react";
import Slider from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonial = () => {
  const sliderRef = useRef(null);
  const settings = {
    slickNext: true,
    slickPrev: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };
  const handleClickPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="relative">
      <div
        onClick={handleClickPrev}
        className=" ml-[-56px] absolute text-center left-0 top-[50%] bg-white shadow-3xl w-9 h-9 rounded-full 
        hidden lg:flex items-center justify-center z-10 transition-transform hover:translate-x-[-4px] cursor-pointer"
      >
        <AiOutlineArrowLeft />
      </div>
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          <div className="py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem illo quibusdam consectetur expedita voluptatum hic
              cum aperiam, doloribus, laborum molestias officia voluptates
              soluta, aliquam ullam. Laudantium delectus ad eum mollitia!
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava01}
                alt="ava 01"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </div>
          <div className="py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem illo quibusdam consectetur expedita voluptatum hic
              cum aperiam, doloribus, laborum molestias officia voluptates
              soluta, aliquam ullam. Laudantium delectus ad eum mollitia!
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava02}
                alt="ava 02"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">Lia Franklin</h6>
                <p>Customer</p>
              </div>
            </div>
          </div>
          <div className="py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem illo quibusdam consectetur expedita voluptatum hic
              cum aperiam, doloribus, laborum molestias officia voluptates
              soluta, aliquam ullam. Laudantium delectus ad eum mollitia!
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava03}
                alt="ava 02"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </div>
          <div className="py-4 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem illo quibusdam consectetur expedita voluptatum hic
              cum aperiam, doloribus, laborum molestias officia voluptates
              soluta, aliquam ullam. Laudantium delectus ad eum mollitia!
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava03}
                alt="ava 02"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div
        onClick={handleClickNext}
        className="absolute -mr-[56px] text-center right-0 top-[50%] bg-white shadow-3xl w-9 h-9 
      rounded-full items-center justify-center z-10 transition-transform hover:translate-x-1 cursor-pointer hidden lg:flex"
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Testimonial;
