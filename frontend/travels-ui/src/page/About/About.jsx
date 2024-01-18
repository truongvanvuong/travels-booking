import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

import useScrollToTop from "../../hooks/useScrollToTop";
import img01 from "../../assets/images/bike-travellers-amico.svg";
import img02 from "../../assets/images/Travelers-pana.svg";
import heroVideo from "../../assets/images/hero-video.mp4";
const About = () => {
  useScrollToTop();
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative">
        <div>
          <video
            className="w-full md:w-full h-[350px] object-cover"
            autoPlay
            alt="Video"
            muted
            loop
          >
            <source src={heroVideo} type="video/mp4"></source>
          </video>
        </div>
        <h1 className="absolute text-[3rem] text-center md:text-[3.6rem] font-medium text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {t("about")} Travel World
        </h1>
      </div>

      <section>
        <Container>
          <Row>
            <Col xs="12">
              <h2 className="text-center text-headingColord text-[1.6rem] lg:text-[2rem] font-medium my-4 leading-[55px]">
                Travel World <br /> {t("lifeYourWay")}
              </h2>
            </Col>
          </Row>
          <Row className="mt-4 flex items-center">
            <Col lg="4">
              <figure className="my-4 lg:!my-0 lg:mr-8 flex justify-center">
                <img
                  src={img01}
                  alt="Bike travellers amico"
                  className="w-[70%] lg:w-full"
                />
              </figure>
            </Col>
            <Col lg="8">
              <div>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.1rem] px-8">
                  {t("aboutDes1")}
                </p>
              </div>
            </Col>
          </Row>
          <Row className="my-8 flex items-center">
            <Col lg="8">
              <div>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.1rem] px-8">
                  {t("aboutDes2")}
                </p>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.1rem] px-8 mt-4">
                  {t("aboutDes3")}
                </p>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.1rem] px-8 mt-4">
                  {t("aboutDes4")}
                </p>
              </div>
            </Col>
            <Col lg="4">
              <figure className="my-4 lg:!my-0 lg:ml-8 flex justify-center">
                <img
                  src={img02}
                  alt="Travelers pana"
                  className="w-[70%] lg:w-full"
                />
              </figure>
            </Col>
          </Row>
          <div className="py-8 text-center">
            <Link
              to="/tours"
              className="btn__customer primary__btn !rounded-lg !inline-block"
            >
              {t("exploreMore")}
            </Link>
          </div>
        </Container>
        <div></div>
      </section>
    </div>
  );
};

export default About;
