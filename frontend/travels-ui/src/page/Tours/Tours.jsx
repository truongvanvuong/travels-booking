import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";

import useScrollToTop from "../../hooks/useScrollToTop";
import { SearchBar, Newsletter, CommonSection } from "../../shared";
import FeaturedList from "../../Components/Featured-tours/FeaturedList";
const Tours = () => {
  useScrollToTop();
  const { t } = useTranslation();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);
  return (
    <div>
      <CommonSection title={t("allTours")} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <FeaturedList />
            <Col lg="12">
              <div className="flex items-center justify-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={
                      page === number
                        ? "bg-secondaryColor w-8 h-8 p-1 rounded-lg border border-solid !border-secondaryColor text-white text-[1.1rem] cursor-pointer flex items-center justify-center"
                        : "w-8 h-8 p-1 rounded-lg border border-solid !border-secondaryColor text-headingColor text-[1.1rem] cursor-pointer flex items-center justify-center"
                    }
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </div>
  );
};

export default Tours;
