import PropTypes from "prop-types";

const Subtitle = ({ subtitle }) => {
  return <h3 className="section__subtitle">{subtitle}</h3>;
};

Subtitle.propTypes = {
  subtitle: PropTypes.string,
};

export default Subtitle;
