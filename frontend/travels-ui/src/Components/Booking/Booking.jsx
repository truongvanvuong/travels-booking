import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";

const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate();
  const { price, reviews } = tour;

  const [credentials, setCredentials] = useState({
    userId: "",
    userEmail: "",
    fullName: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });
  const handleOnChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      credentials.fullName === "" ||
      credentials.phone === "" ||
      credentials.guestSize === "" ||
      credentials.bookAt === ""
    ) {
      alert("nhap");
    } else {
      navigate("/thank-you");
    }
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  return (
    <div className="booking p-8 rounded-lg border border-solid !border-[rgb(299, 231, 235)] sticky top-[130px] mt-4 md:!mt-0">
      <div className="flex items-center justify-between !border-b border-solid !border-[rgb(299, 231, 235)] pb-8 ">
        <h3 className="text-[2rem] font-semibold">
          ${price}
          <span className="text-[1.1rem] font-normal text-textColor">
            /pre person
          </span>
        </h3>
        <span className="flex items-center gap-x-2 text-[1rem] text-textColor">
          <AiFillStar className="text-secondaryColor text-[0.9rem]" />{" "}
          {avgRating === 0 ? null : avgRating}{" "}
          <span className="font-[500] text-textColor text-[0.9rem]">
            ({reviews.length})
          </span>
        </span>
      </div>
      <div className="booking__form pt-8">
        <h5 className="mb-4 font-semibold">Imformation</h5>
        <Form
          onSubmit={handleSubmit}
          className="booking__info p-4 border border-solid !border-[rgb(299, 231, 235)] rounded-md"
        >
          <FormGroup>
            <input
              className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleOnChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
              type="number"
              placeholder="Phone"
              min="0"
              id="phone"
              required
              onChange={handleOnChange}
            />
          </FormGroup>
          <FormGroup className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <input
              className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleOnChange}
            />
            <input
              className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
              type="number"
              min="0"
              placeholder=""
              id="guestSize"
              required
              onChange={handleOnChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking__bottom mt-4">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 flex items-center justify-between">
            <h5 className="flex items-center gap-1 text-[1rem] text-textColor font-medium">
              ${price} <AiOutlineClose /> 1 person
            </h5>
            <span className="text-[1rem] text-textColor font-medium">
              {price}
            </span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 flex items-center justify-between">
            <h5 className="text-[1rem] text-textColor font-medium">
              Service charge
            </h5>
            <span className="text-[1rem] text-textColor font-medium">
              ${serviceFee}
            </span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 flex items-center justify-between">
            <h5 className="text-[1.1rem] text-headingColor font-bold">Total</h5>
            <span className="text-[1.1rem] text-headingColor font-bold">
              ${totalAmount}
            </span>
          </ListGroupItem>
        </ListGroup>
        <button
          onClick={handleSubmit}
          className="btn__customer primary__btn w-full mt-4"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

Booking.propTypes = {
  tour: PropTypes.object.isRequired,
  avgRating: PropTypes.string,
};

export default Booking;
