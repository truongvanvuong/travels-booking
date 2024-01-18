import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { AiFillStar, AiOutlineClose } from "react-icons/ai";
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";

const Booking = ({
  tour,
  avgRating,
  price,
  prePerson,
  formattedPrice,
  formatPrice,
  t,
}) => {
  const navigate = useNavigate();
  const [fieldWarnings, setFieldWarnings] = useState({});
  const [credentials, setCredentials] = useState({
    userId: 1,
    userEmail: "test@example.com",
    userFullName: "",
    userPhone: "",
    guestSize: "",
    bookAt: "",
  });
  const { reviews } = tour;
  const serviceFee = 10;

  const handleOnChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    setFieldWarnings((prev) => ({
      ...prev,
      [e.target.id]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(credentials).some((value) => value === "");
    if (isEmpty) {
      const fieldWarnings = {};
      Object.keys(credentials).forEach((field) => {
        if (credentials[field] === "") {
          fieldWarnings[field] = true;
        }
      });
      setFieldWarnings(fieldWarnings);
    } else {
      setFieldWarnings({});
      navigate("/thank-you");
    }
  };
  const { formattedPrice: formattedPriceFee } = formatPrice(serviceFee);
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  const { formattedPrice: formattedPricetotalAmount, price: pricetotalAmount } =
    formatPrice(totalAmount);
  return (
    <div className="booking p-8 rounded-lg border border-solid !border-[rgb(299, 231, 235)] sticky top-[130px] mt-4 md:!mt-0">
      <div className="flex items-center justify-between !border-b border-solid !border-[rgb(299, 231, 235)] pb-8 ">
        <h3 className="text-[1.4rem] font-semibold">
          {formattedPrice}
          <span className="text-[0.9rem] font-normal text-textColor">
            /{prePerson}
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
        <h5 className="mb-4 font-semibold">{t("imformation")}</h5>
        <Form
          onSubmit={handleSubmit}
          className="booking__info p-4 border border-solid !border-[rgb(299, 231, 235)] rounded-md"
        >
          <FormGroup>
            <input
              className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
              type="text"
              placeholder={t("fullName")}
              id="userFullName"
              required
              onChange={handleOnChange}
            />
            {fieldWarnings.userFullName && (
              <span className="text-[14px] px-2 my-2 block text-red-400">
                {t("enter")} {t("fullName")}
              </span>
            )}
          </FormGroup>
          <FormGroup>
            <input
              className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
              type="number"
              placeholder={t("phone")}
              min="0"
              id="userPhone"
              required
              onChange={handleOnChange}
            />
            {fieldWarnings.userPhone && (
              <span className="text-[14px] px-2 my-2 block text-red-400">
                {t("enter")} {t("phone")}
              </span>
            )}
          </FormGroup>
          <FormGroup className="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <div>
              <input
                className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
                type="date"
                placeholder=""
                id="bookAt"
                required
                onChange={handleOnChange}
              />
              {fieldWarnings.bookAt && (
                <span className="text-[14px] px-2 my-2 block text-red-400">
                  {t("selectDate")}
                </span>
              )}
            </div>

            <div>
              <input
                className="w-full p-2 rounded-lg text-headingColor text-[1rem] border-b border-solid !border-[rgb(299, 231, 235)] focus:outline-none"
                type="number"
                min="0"
                max="100"
                placeholder={t("numberOfPeople")}
                id="guestSize"
                required
                onChange={handleOnChange}
              />
              {fieldWarnings.guestSize && (
                <span className="text-[14px] px-2 my-2 block text-red-400">
                  {t("numberOfPeople")}
                </span>
              )}
            </div>
          </FormGroup>
        </Form>
      </div>
      <div className="booking__bottom mt-4">
        <ListGroup>
          <ListGroupItem className="border-0 px-0 flex flex-wrap items-center justify-between">
            <h5 className="flex items-center gap-1 text-[0.9rem] sm:text-[1rem] text-textColor font-medium">
              {formattedPrice} <AiOutlineClose /> {prePerson}
            </h5>
            <span className="text-[1rem] text-textColor font-medium">
              {formattedPrice}
            </span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 flex items-center justify-between">
            <h5 className="text-[1rem] text-textColor font-medium">
              {t("serviceCharge")}
            </h5>
            <span className="text-[1rem] text-textColor font-medium">
              {formattedPriceFee}
            </span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 flex items-center justify-between">
            <h5 className="text-[1.1rem] text-headingColor font-bold">
              {t("total")}
            </h5>
            <span className="text-[1.1rem] text-headingColor font-bold">
              {formattedPricetotalAmount}
            </span>
          </ListGroupItem>
        </ListGroup>
        <button
          onClick={handleSubmit}
          className="btn__customer primary__btn mt-4 !w-full"
        >
          {t("bookNow")}
        </button>
      </div>
    </div>
  );
};

Booking.propTypes = {
  tour: PropTypes.object.isRequired,
  avgRating: PropTypes.string,
  price: PropTypes.number.isRequired,
  formattedPrice: PropTypes.string,
  prePerson: PropTypes.string,
  formatPrice: PropTypes.func,
  t: PropTypes.func,
};

export default Booking;
