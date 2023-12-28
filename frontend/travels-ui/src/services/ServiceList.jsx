import React from "react";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => {
        return (
          <Col lg="3" md="6" sm="12" key={index} className="mb-3 lg:!mb-0">
            <ServiceCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default ServiceList;
