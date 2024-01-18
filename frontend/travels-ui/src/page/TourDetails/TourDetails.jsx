import { useState, useRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useTranslation } from "react-i18next";

import { AiFillStar } from "react-icons/ai";
import {
  RiMapPinFill,
  RiMapPin2Line,
  RiGroupLine,
  RiMapPinTimeLine,
} from "react-icons/ri";
import caculateAvgRating from "../../Utils/avgRating";
import tourData from "../../assets/data/tours";
import avatar from "../../assets/images/avatar.jpg";

import Booking from "../../Components/Booking";
import { Newsletter } from "../../shared";
import formatPrice from "../..//Utils/formattedPrice";

const TourDetails = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { id } = useParams();

  const reviewMsgRef = useRef();

  const tour = tourData.find((tour) => tour.id === id);

  const {
    title,
    city,
    distance,
    price: originalPrice,
    maxGroupSize,
    desc,
    reviews,
    address,
    photo,
    featured,
  } = tour;
  const { totalRating, avgRating } = caculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  const { formattedPrice, languageCode } = formatPrice(originalPrice);

  const HandleSubmit = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img
                className="w-full rounded-lg mb-10"
                src={photo}
                alt="image"
              />
              <div className="tour__info rounded-lg border border-solid border-[rgb(299, 231, 235)] p-8 ">
                <h2 className="text-[1.5rem]">{title}</h2>
                <div className="flex items-center gap-5 mt-2">
                  <span className="flex items-center gap-x-2 text-[0.9rem] sm:text-[1rem] text-textColor">
                    <AiFillStar className="text-secondaryColor text-[0.9rem]" />{" "}
                    {avgRating === 0 ? null : avgRating}{" "}
                    {totalRating === 0 ? (
                      t("notRate")
                    ) : (
                      <span className="font-[500] text-textColor text-[0.9rem]">
                        ({reviews.length})
                      </span>
                    )}
                  </span>
                  <span className="flex items-center gap-x-2 text-[0.9rem] sm:text-[1rem] text-textColor">
                    <RiMapPinFill />
                    {address}
                  </span>
                </div>
                <div className="tour__extra lg:flex items-center lg:gap-x-11 mt-4 mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <span className="flex items-center gap-x-2 text-[0.9rem] sm:text-[1rem]">
                    <RiMapPin2Line /> {city}
                  </span>
                  <span className="flex items-center gap-x-2 text-[0.9rem] sm:text-[1rem]">
                    {formattedPrice}/{t("perPerson")}
                  </span>
                  <span className="flex items-center gap-x-2 text-[0.9rem] sm:text-[1rem]">
                    <RiMapPinTimeLine /> {distance} k/m
                  </span>
                  <span className="flex items-center gap-x-2 text-[0.9rem] sm:text-[1rem]">
                    <RiGroupLine /> {maxGroupSize}
                  </span>
                </div>

                <h5 className="mb-4 text-[1.3rem]">{t("description")}</h5>
                <p className="leading-6 text-[1rem] text-textColor">{desc}</p>
              </div>
              <div className="tour__review mt-4 rounded-lg border border-solid border-[rgb(299, 231, 235)] p-8 ">
                <h4 className="mb-3">
                  {t("reviews")}
                  {"  "}({reviews?.length})
                </h4>
                <Form onSubmit={HandleSubmit}>
                  <div className="flex items-center gap-3 mb-4">
                    {[...Array(5).keys()].map((_, index) => {
                      index += 1;
                      return (
                        <button
                          key={index}
                          type="button"
                          className={`${
                            index <= ((rating && hover) || hover)
                              ? "text-secondaryColor"
                              : "text-gray-400"
                          } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                          onClick={() => setRating(index)}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                          onDoubleClick={() => {
                            setHover(0);
                            setRating(0);
                          }}
                        >
                          <AiFillStar />
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between md:gap-3 w-full p-3 rounded-[2rem] border border-solid ">
                    <input
                      ref={reviewMsgRef}
                      className="w-full sm:w-[65%] md:w-[70%] py-2 px-0 focus:outline-none border-b sm:border-none !border-[rgb(299, 231, 235)]"
                      type="text"
                      placeholder={t("shareYourThoughts")}
                      required
                    />
                    <button className="text-center btn__customer mt-4 sm:!mt-0 primary__btn text-white">
                      {t("submit")}
                    </button>
                  </div>
                </Form>
                <ListGroup className="user_review mt-10">
                  {reviews?.map((review, index) => (
                    <div key={index} className="flex gap-x-4 mb-8">
                      <img
                        className="w-14 h-14 rounded-[50px] object-cover"
                        src={avatar}
                        alt="Aavtar"
                      />
                      <div className="w-full">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="text-[1rem] font-medium mb-0">
                              Karry
                            </h5>
                            <p className="text-[0.9rem] text-textColor">
                              {new Date("1/12/2022").toLocaleString(
                                languageCode,
                                options
                              )}
                            </p>
                          </div>
                          <span className="flex items-center">
                            5
                            <AiFillStar className="text-secondaryColor ml-1" />
                          </span>
                        </div>
                        <p className="text-[0.9rem] text-textColor font-medium mt-3">
                          Amazing tour
                        </p>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <Booking
              tour={tour}
              avgRating={avgRating}
              price={originalPrice}
              formattedPrice={formattedPrice}
              prePerson={t("perPerson")}
              formatPrice={formatPrice}
              t={t}
            />
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </section>
  );
};

export default TourDetails;
