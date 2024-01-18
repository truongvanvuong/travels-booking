import TourCard from "../../shared/TourCard";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../Utils/config";
const FeaturedList = () => {
  // const { data: featuredTours } = useFetch(
  //   `${BASE_URL}/tours/search/getFeaturedTours`
  // );
  return (
    <>
      {tourData?.map((tour) => {
        return (
          <Col lg="4" xl="3" md="6" sm="12" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        );
      })}
    </>
  );
};

export default FeaturedList;
