import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import heroImg1 from "../../assets/images/hero-img01.jpg";
import heroImg2 from "../../assets/images/hero-img02.jpg";
import heroVideo from "../../assets/images/hero-video.mp4";
import wordImg from "../../assets/images/world.png";
import experienceImg from "../../assets/images/experience.png";

import { Subtitle, SearchBar } from "../../shared";
import ServicesList from "../../services";
import FeaturedList from "../../Components/Featured-tours";
import MasonryImagesGallery from "../../Components/Image-gallery";
import Testimonial from "../../Components/Testimonial";
import Newsletter from "../../shared/Newsletter";

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="pt-[10px] lg:pt-[50px]">
        <Container>
          <Row>
            <Col lg="6">
              <div className="!pt-4 lg:pt-12">
                <div className="flex items-center">
                  <Subtitle subtitle={t("titleBanner1")} />
                  <img
                    src={wordImg}
                    alt="Word"
                    className="h-[2.3rem] w-[2.3rem]"
                  />
                </div>
                <h1 className="text-[2.4rem] md:text-[3rem] font-medium mt-4 mb-6 md:mb-8 text-headingColor">
                  {t("title1")}{" "}
                  <span className="text-secondaryColor">{t("highlight")}</span>
                </h1>
                <p className="text-[0.9rem] md:text-[1.1rem] text-textColor leading-8">
                  {t("description1")}
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box pt-8">
                <img
                  className="w-full h-[350px] rounded-[20px] border-[1px] border-solid border-secondaryColor object-cover transition-all"
                  src={heroImg1}
                  alt="Hero Image"
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box pt-8 lg:mt-4">
                <video
                  className="w-full h-[350px] rounded-[20px] border-[1px] border-solid border-secondaryColor object-cover transition-all"
                  autoPlay
                  alt="Video"
                  controls
                  loop
                  muted
                >
                  <source src={heroVideo} type="video/mp4"></source>
                </video>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box pt-8 lg:mt-8">
                <img
                  className="w-full h-[350px] rounded-[20px] border-[1px] border-solid border-secondaryColor object-cover transition-all"
                  src={heroImg2}
                  alt="Hero Image"
                />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="font-subtitleFontName font-[500] text-[2rem] md:text-[2.5rem] text-[#ee6e6e]">
                {t("titleBanner2")}
              </h5>
              <h2 className="mb-4 lg:!mb-0 text-[2rem] md:text-[2.5rem] font-medium">
                {t("title2")}
              </h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/*featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={t("titleBanner3")} />
              <h2 className="text-[2rem] md:text-[2.3rem] font-[500] mt-4">
                {t("title3")}
              </h2>
            </Col>
            <FeaturedList />
          </Row>
        </Container>
      </section>
      {/*featured tour section end */}

      {/*experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={t("titleBanner4")} />
                <h2 className="text-[2rem] md:text-[2.5rem] mt-4 font-medium">
                  {t("title4")}
                </h2>
                <p className="text-[1.1rem] text-textColor mt-4">
                  {t("description2")}
                </p>
              </div>
              <div className="counter__wrapper flex items-center justify-center lg:justify-start gap-5 mt-8">
                <div className="content__box  ">
                  <span
                    className="w-14 h-14 lg:w-[70px] lg:h-[70px] m-auto flex items-center justify-center bg-primaryColor
                   text-white text-[1.3rem] lg:text-[1.6rem] font-semibold rounded-tl-[10px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"
                  >
                    12k+
                  </span>
                  <h6 className="text-center font-medium text-[0.9rem] lg:text-[1.1rem] mt-[0.7rem] text-textColor">
                    {t("successfulTrip")}
                  </h6>
                </div>
                <div className="content__box">
                  <span
                    className="w-14 h-14 lg:w-[70px] lg:h-[70px] m-auto flex items-center justify-center bg-primaryColor
                   text-white text-[1.3rem] lg:text-[1.6rem] font-semibold rounded-tl-[10px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"
                  >
                    2k+
                  </span>
                  <h6 className="text-center font-medium text-[0.9rem] lg:text-[1.1rem] mt-[0.7rem] text-textColor">
                    {t("regularClients")}
                  </h6>
                </div>
                <div className="content__box">
                  <span
                    className="w-14 h-14 lg:w-[70px] lg:h-[70px] m-auto flex items-center justify-center bg-primaryColor
                   text-white text-[1.3rem] lg:text-[1.6rem] font-semibold rounded-tl-[10px] rounded-tr-[5px] rounded-br-[10px] rounded-bl-[5px]"
                  >
                    15
                  </span>
                  <h6 className="text-center font-medium text-[0.9rem] lg:text-[1.1rem] mt-[0.7rem] text-textColor">
                    {t("yearsExperience")}
                  </h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img mt-8 lg:mt-0 text-center">
                <img
                  src={experienceImg}
                  alt="Experience Image"
                  className="w-full"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*experience section end */}

      {/*gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={t("titleBanner5")} />
              <h2 className="gallery__title text-[2rem] md:text-[2.3rem] font-medium mb-[2.5rem] mt-4">
                {t("title5")}
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*gallery section end */}

      {/*testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={t("titleBanner6")} />
              <h2 className="text-[2rem] md:text-[2.3rem] mt-4 font-medium">
                {t("title6")}
              </h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/*testimonial section end */}
      <Newsletter />
    </main>
  );
};

export default Home;
