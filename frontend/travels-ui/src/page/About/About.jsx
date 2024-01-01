import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import img01 from "../../assets/images/bike-travellers-amico.svg";
import img02 from "../../assets/images/Travelers-pana.svg";
import heroVideo from "../../assets/images/hero-video.mp4";
const About = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <video
            className="w-full md:w-full h-[350px] object-cover"
            autoPlay
            alt="Video"
            muted
          >
            <source src={heroVideo} type="video/mp4"></source>
          </video>
        </div>
        <h1 className="absolute shadow-lg text-[3rem] text-center md:text-[3.6rem] font-medium text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          About Us
        </h1>
      </div>

      <section>
        <Container>
          <Row>
            <Col xs="12">
              <h2 className="text-center text-headingColord text-[1.6rem] lg:text-[2rem] font-medium my-4 leading-[55px]">
                Travel World <br /> Life, Your Way
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
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.2rem] px-8">
                  Traveloka is Southeast Asia’s travel and lifestyle app, we
                  provide you with access to discover and purchase different
                  type of travel needs, local services, and financial services
                  products. Traveloka's comprehensive product portfolio includes
                  transport booking services such as flight tickets, bus,
                  trains, car rental, airport transfer, as well as access to the
                  largest accommodation inventory in Southeast Asia. Not only
                  that, to help you fulfill more of your lifestyle aspirations,
                  we also complete our offerings with a wide range of local
                  attractions, activities as well as wellness and beauty
                  clinics. So, whatever your lifestyle choice is, you are just
                  one click away!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="my-8 flex items-center">
            <Col lg="8">
              <div>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.2rem] px-8">
                  Traveloka believes that happiness may come in many forms for
                  different people in different occassion. Therefore, with our
                  credibility of more than 10 years experience, we promise you
                  an extensive choices to ignite your very own state of
                  happiness. Whether you are looking for a glamping experience
                  or staycation in 5-stars resort, a relaxing spa day or a
                  thrilling holiday adventure, a convenient first-class flight
                  or exciting road trip, both for domestic and international
                  trip, you got it all in one Traveloka app.
                </p>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.2rem] px-8 mt-4">
                  With 24/7 customer service in local languages as well as more
                  than 30 different local payment methods, Traveloka has been
                  downloaded more than 100 million times, making it the most
                  popular travel and lifestyle booking application in the
                  Southeast Asian region.
                </p>
                <p className="text-[#000000E0] text-[0.9rem] md:text-[1.2rem] px-8 mt-4">
                  What are you waiting for? Book that well-planned trip or have
                  your first last minute getaway with us. For all of your unique
                  travel and lifestyle choices, as always, Traveloka got you
                  covered.
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
              className="btn__customer primary__btn !rounded-lg"
            >
              Explore More
            </Link>
          </div>
        </Container>
        <div></div>
      </section>
    </div>
  );
};

export default About;
