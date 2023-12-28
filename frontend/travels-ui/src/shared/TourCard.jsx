import PropTypes from "prop-types";

import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import caculateAvgRating from "../Utils/avgRating";

const baseLinkImg = "../";
const TourCard = ({ tour }) => {
  const { id, title, photo, city, price, featured, reviews } = tour;
  const { totalRating, avgRating } = caculateAvgRating(reviews);
  return (
    <div>
      <Card className="border-none shadow-xl hover:shadow-2xl transition-transform duration-[0.2s] ease-linear hover:-translate-y-2 cursor-pointer">
        <div className="relative">
          <Link to={`/tour/${id}`}>
            <img src={photo} className="w-full rounded-t-[5px]" alt={title} />
            {featured && (
              <span className="absolute bottom-0 right-0 w-max h-max z-10 bg-primaryColor text-white py-[0.3rem] px-[0.5rem] rounded-tl">
                Featured
              </span>
            )}
          </Link>
        </div>
        <CardBody>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-[1rem] text-headingColor font-medium">
              <RiMapPinLine className="text-secondaryColor text-[0.9rem] " />{" "}
              {city}
            </span>
            <span className="flex items-center gap-1 text-[1rem] text-textColor">
              <AiFillStar className="text-secondaryColor text-[0.9rem]" />{" "}
              {avgRating === 0 ? null : avgRating}{" "}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span className="font-[500] text-textColor text-[0.8rem]">
                  ({reviews.length})
                </span>
              )}
            </span>
          </div>
          <h5 className="mt-4 text-[0.9rem] lg:text-[1.1rem] cursor-pointer font-medium">
            <Link
              className="text-headingColor transition-all hover:text-secondaryColor"
              to={`/tour/${id}`}
            >
              {title}
            </Link>
          </h5>
          <div className="flex items-center justify-between gap-1 mt-3">
            <h5 className="text-[1.1rem] cursor-pointer text-secondaryColor font-[700]">
              ${price}
              <span className="font-[500] text-textColor text-[0.8rem]">
                /per person
              </span>
            </h5>
            <button className="bg-secondaryColor flex items-center justify-center cursor-pointer px-3 py-2 rounded-lg hover:opacity-80 transition-opacity">
              <Link
                className="text-white text-[0.7rem] font-medium lg:text-[0.9rem]"
                to={`/tour/${id}`}
              >
                Book Now
              </Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

TourCard.propTypes = {
  tour: PropTypes.object,
};

export default TourCard;
