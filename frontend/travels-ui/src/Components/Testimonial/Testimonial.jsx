import { useRef } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Testimonial = () => {
  const { t } = useTranslation();
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
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
        className=" -ml-[25px] xl:-ml-[50px] absolute text-center left-0 top-[50%] bg-white shadow-3xl w-9 h-9 rounded-full 
        hidden lg:flex items-center justify-center z-10 transition-transform hover:translate-x-[-4px] cursor-pointer"
      >
        <AiOutlineArrowLeft />
      </div>
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          <div className="py-4 px-3">
            <p className="min-h-[150px]">
              I am really impressed with the professionalism and service
              attitude of the staff. From the welcome at the airport, the always
              enthusiastic and knowledgeable tour guide, to the meticulously
              prepared and delicious meals, everything exceeded my expectations.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava01}
                alt="ava 01"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">Typel</h6>
                <p>{t("customer")}</p>
              </div>
            </div>
          </div>
          <div className="py-4 px-3">
            <p className="min-h-[150px]">
              The feeling of discovering new places while having great support
              from the tour team is an unforgettable experience. I will
              definitely continue to use their services for future trips.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava02}
                alt="ava 02"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">Lia Franklin</h6>
                <p>{t("customer")}</p>
              </div>
            </div>
          </div>
          <div className="py-4 px-3">
            <p className="min-h-[150px]">
              The tour guide is very knowledgeable and attentive, always ready
              to help and share knowledge about attractions. The hotel we stayed
              in was clean and comfortable, and the meals provided a real taste
              of local cuisine. I appreciate the attention to detail and would
              definitely recommend them to friends and family.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava03}
                alt="ava 02"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">John Doe</h6>
                <p>{t("customer")}</p>
              </div>
            </div>
          </div>
          <div className="py-4 px-3">
            <p className="min-h-[150px]">
              I felt very satisfied with the flexibility and personal care I
              received throughout the trip.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <img
                src={ava03}
                alt="ava 02"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h6 className="mb-0 mt-3">Skyler</h6>
                <p>{t("customer")}</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div
        onClick={handleClickNext}
        className="absolute -mr-[25px] xl:-mr-[50px] text-center right-0 top-[50%] bg-white shadow-3xl w-9 h-9 
      rounded-full items-center justify-center z-10 transition-transform hover:translate-x-1 cursor-pointer hidden lg:flex"
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Testimonial;
