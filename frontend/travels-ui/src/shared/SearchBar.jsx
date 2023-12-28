import { useRef } from "react";
import PropTypes from "prop-types";
import { BiMap, BiGroup } from "react-icons/bi";

import { Col, Form, FormGroup } from "reactstrap";
import { RiMapPinTimeLine, RiSearchLine } from "react-icons/ri";

const SearchBar = ({ props }) => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const loctaion = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (loctaion === "" || distance === "" || maxGroupSize === "") {
      alert("Null");
    }
  };
  return (
    <Col lg="12">
      <div className="py-2 px-4 rounded-[50px] shadow-2xl lg:w-max mt-[50px] w-full">
        <Form className="grid grid-cols-1 md:grid-cols-2 lg:flex !gap-5">
          <FormGroup className="from__group px-2 py-2 flex gap-3 items-center lg:border-r-2 border-[#ddd] border-b border-solid md:border-b-0">
            <span className="text-[#ee6e6e]">
              <BiMap className="w-5 h-5" />
            </span>
            <div className="w-full lg:w-max">
              <h6 className="mb-0">Location</h6>
              <input
                ref={locationRef}
                type="text"
                placeholder="Where are you going?"
                className="text-sm text-headingColor border-none font-[500] focus:outline-none w-full"
              />
            </div>
          </FormGroup>
          <FormGroup className="from__group px-2 py-2 flex gap-3 items-center lg:border-r-2 border-[#ddd] border-b border-solid md:border-b-0">
            <span className="text-[#ee6e6e]">
              <RiMapPinTimeLine className="w-5 h-5" />
            </span>
            <div className="w-full lg:w-max">
              <h6 className="mb-0">Distance</h6>
              <input
                ref={distanceRef}
                type="number"
                min="0"
                placeholder="Distance km"
                className="text-sm text-headingColor border-none font-[500] border-r-2 focus:outline-none w-full"
              />
            </div>
          </FormGroup>
          <FormGroup className="from__group px-2 py-2 flex gap-3 items-center border-b border-solid border-[#ddd] md:border-none">
            <span className="text-[#ee6e6e]">
              <BiGroup className="w-5 h-5" />
            </span>
            <div className="w-full lg:w-max">
              <h6 className="mb-0">Max People</h6>
              <input
                ref={maxGroupSizeRef}
                min="0"
                type="number"
                placeholder="0"
                className="text-sm text-headingColor border-none font-[500] border-r-2 focus:outline-none w-full"
              />
            </div>
          </FormGroup>
          <div
            className="flex items-center justify-center md:justify-start"
            type="submit"
            onClick={searchHandler}
          >
            <RiSearchLine
              className="hover:brightness-110 transition-all w-[85%] md:w-10 h-10 p-[0.5rem] bg-secondaryColor text-white 
            rounded-tl-[10px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px] cursor-pointer"
            />
          </div>
        </Form>
      </div>
    </Col>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
