import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import { useTranslation } from "react-i18next";

import { BiMap, BiGroup } from "react-icons/bi";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import { Col, Form, FormGroup } from "reactstrap";
import { RiMapPinTimeLine, RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState({
    location: "",
    distance: 0,
    maxGroupSize: 0,
  });
  const [visibleLocation, setVisibleLocation] = useState(false);
  const [visibleDistance, setVisibleDistance] = useState(false);
  const [visiblePeople, setVisiblePeople] = useState(false);
  const searchHandler = (e) => {
    setSearchValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    const { location, distance, maxGroupSize } = searchValue;
    if (location !== "" && distance !== 0 && maxGroupSize !== 0) {
      console.log(searchValue);
    } else {
      setVisibleLocation(location === "");
      setVisibleDistance(distance === 0 || distance === "");
      setVisiblePeople(maxGroupSize === 0 || maxGroupSize === "");
    }
  };
  const handleBlur = (fieldName) => {
    const { location, distance, maxGroupSize } = searchValue;

    switch (fieldName) {
      case "location":
        setVisibleLocation(location === "");
        break;
      case "distance":
        setVisibleDistance(distance === "" || distance === 0);
        break;
      case "maxGroupSize":
        setVisiblePeople(maxGroupSize === 0 || maxGroupSize === 0);
        break;
      default:
        break;
    }
  };
  const hideTippy = () => {
    setVisibleLocation(false);
    setVisibleDistance(false);
    setVisiblePeople(false);
  };
  useEffect(() => {
    if (visibleLocation || visibleDistance || visiblePeople) {
      const timer = setTimeout(() => {
        hideTippy();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [visibleLocation]);
  return (
    <Col lg="12">
      <div className="py-2 px-4 rounded-[50px] shadow-2xl lg:w-max mt-[50px] w-full">
        <Form className="grid grid-cols-1 md:grid-cols-2 lg:flex !gap-5">
          <FormGroup className="from__group px-2 py-2 flex gap-3 items-center lg:border-r-2 border-[#ddd] border-b border-solid md:border-b-0">
            <span className="text-[#ee6e6e]">
              <BiMap className="w-5 h-5" />
            </span>
            <div className="w-full lg:w-max">
              <h6 className="mb-0">{t("location")}</h6>
              <Tippy
                content={t("locationTooltip")}
                visible={visibleLocation}
                theme="light"
                className="mb-[16px] lg:!mb-[40px]"
              >
                <input
                  onBlur={() => handleBlur("location")}
                  onChange={searchHandler}
                  type="text"
                  name="location"
                  placeholder={t("locationPlaceholder") + "?"}
                  className="text-sm text-headingColor border-none font-[500] focus:outline-none w-full"
                />
              </Tippy>
            </div>
          </FormGroup>

          <FormGroup className="from__group px-2 py-2 flex gap-3 items-center lg:border-r-2 border-[#ddd] border-b border-solid md:border-b-0">
            <span className="text-[#ee6e6e]">
              <RiMapPinTimeLine className="w-5 h-5" />
            </span>
            <div className="w-full lg:w-max">
              <h6 className="mb-0">{t("distance")}</h6>
              <Tippy
                content={t("distanceTooltip")}
                visible={visibleDistance}
                theme="light"
                className="mb-[16px] lg:!mb-[40px]"
              >
                <input
                  onBlur={() => handleBlur("distance")}
                  onChange={searchHandler}
                  type="number"
                  name="distance"
                  min="0"
                  placeholder={t("distancePlaceholder") + " km"}
                  className="text-sm text-headingColor border-none font-[500] border-r-2 focus:outline-none w-full"
                />
              </Tippy>
            </div>
          </FormGroup>
          <FormGroup className="from__group px-2 py-2 flex gap-3 items-center border-b border-solid border-[#ddd] md:border-none">
            <span className="text-[#ee6e6e]">
              <BiGroup className="w-5 h-5" />
            </span>
            <div className="w-full lg:w-max">
              <h6 className="mb-0">{t("maxPeople")}</h6>
              <Tippy
                content={t("maxPeopleTooltip")}
                visible={visiblePeople}
                theme="light"
                className="mb-[16px] lg:!mb-[40px]"
              >
                <input
                  onBlur={() => handleBlur("maxGroupSize")}
                  onChange={searchHandler}
                  min="0"
                  name="maxGroupSize"
                  type="number"
                  placeholder="0"
                  className="text-sm text-headingColor border-none font-[500] border-r-2 focus:outline-none w-full"
                />
              </Tippy>
            </div>
          </FormGroup>
          <Tippy
            content={t("btnSearch")}
            theme="light"
            className="!mb-2 hidden lg:block "
          >
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
          </Tippy>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
