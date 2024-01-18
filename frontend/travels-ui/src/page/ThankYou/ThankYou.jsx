import { Container, Row, Col } from "reactstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ThankYou = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <AiOutlineCheckCircle className="inline-block text-[6rem] text-green-700" />
              <h1 className="mb-3 font-semibold text-[4.6rem] font-subtitleFontName">
                {t("thankYou")}
              </h1>
              <h3 className="mb-4  text-[1.6rem] font-medium">
                {t("yourTourIsBooked")}
              </h3>
              <button className="btn__customer primary__btn w-72">
                <Link to="/home">{t("backToHome")}</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
