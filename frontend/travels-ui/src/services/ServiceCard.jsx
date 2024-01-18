import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;
  return (
    <div className="p-3 border-b border-solid border-[#faa83586] border-r rounded-lg h-full">
      <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[50px] bg-secondaryColor p-2 mb-4 leading-[50px]">
        <img
          className="text-[0.9rem] text-textColor"
          src={imgUrl}
          alt={title}
        />
      </div>
      <h5 className="font-medium mb-2">{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  item: PropTypes.object,
};

export default ServiceCard;
