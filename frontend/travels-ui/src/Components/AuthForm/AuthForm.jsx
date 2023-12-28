import React from "react";
import PropTypes from "prop-types";
import userIcon from "../../assets/images/user.png";

import { Link } from "react-router-dom";

const AuthForm = ({ children, img, title, linkTo, linktext, paraText }) => {
  return (
    <div className="login__container flex justify-between md:shadow-[rgba(17,12,46,0.15)_0px_48px_100px_0px] mt-[65px] rounded-l-xl">
      <div className="login__img md:w-[50%] lg:w-[60%] text-center hidden md:flex items-center justify-center">
        <img className="w-[80%] object-cover" src={img} alt="Image Login" />
      </div>
      <div className="login__form p-[50px] bg-secondaryColor relative w-full md:rounded-r-xl md:rounded-l-none rounded-xl md:w-[50%] lg:w-[40%]">
        <div className="user w-[80px] h-[80px] absolute -top-[9%] left-[50%] -translate-x-2/4 translate-y-[-9%]">
          <img
            className="w-full shadow rounded-full"
            src={userIcon}
            alt="Icon"
          />
        </div>
        <h2 className="text-white text-center mb-8 text-[1.4rem] font-medium md:text-[1.6rem] capitalize">
          {title}
        </h2>
        {children}
        <p className="text-[1rem] text-white mt-6 text-center">
          {paraText} have an account?
          <Link
            className="text-[#000000E0] no-underline ml-[5px] font-medium hover:underline capitalize"
            to={`/${linkTo}`}
          >
            {linktext}
          </Link>
        </p>
      </div>
    </div>
  );
};

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  linkTo: PropTypes.string,
  linktext: PropTypes.string,
  paraText: PropTypes.string,
};

export default AuthForm;
