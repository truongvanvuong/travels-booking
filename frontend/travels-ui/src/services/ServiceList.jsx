import { Col } from "reactstrap";
import { useTranslation } from "react-i18next";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  const { t } = useTranslation();
  const servicesData = [
    {
      imgUrl: weatherImg,
      title: t("calculateWeather"),
      desc: t("weatherDes"),
    },
    {
      imgUrl: guideImg,
      title: t("bestTourGuide"),
      desc: t("tourGuideDes"),
    },
    {
      imgUrl: customizationImg,
      title: t("customization"),
      desc: t("customizationDes"),
    },
  ];
  return (
    <>
      {servicesData.map((item, index) => {
        return (
          <Col
            sm="12"
            md="6"
            lg="3"
            xl="3"
            key={index}
            className="mb-3 lg:!mb-0"
          >
            <ServiceCard item={item} />
          </Col>
        );
      })}
    </>
  );
};

export default ServiceList;
