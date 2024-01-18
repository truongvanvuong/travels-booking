import { Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";

import maleTourist from "../assets/images/male-tourist.png";
const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#cae5f4] p-0 mt-12">
      <Container>
        <Row>
          <Col lg="6" sm="12">
            <div className="py-[50px]">
              <h2 className=" text-[1.9rem] md:text-[2.5rem] mb-8 font-medium">
                {t("title7")}
              </h2>
              <div className="flex items-center justify-between bg-white p-2 mb-2 rounded">
                <input
                  className="border-none text-[1rem] text-headingColor focus:outline-none p-1"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                />
                <button className="py-[0.4rem] px-2 md:py-2 md:!px-6 bg-secondaryColor text-white text-[0.8rem] font-medium md:text-[1.1rem] rounded hover:opacity-80 transition-opacity">
                  {t("subscribe")}
                </button>
              </div>
              <p className="text-headingColor text-[0.9rem] md:text-[1.1rem]">
                {t("subscribeDes")}
              </p>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <div>
              <img src={maleTourist} alt="Male Tourist" className="w-full" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
