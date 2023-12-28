import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { RiLinkedinFill } from "react-icons/ri";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";

import logo from "../../assets/images/logo.png";
const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/truongvanvuong",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/vuongvan0712",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];
const quickLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
  {
    path: "/tours",
    title: "Tour",
  },
  {
    path: "#",
    title: "Blog",
  },
];
const solutionLinks = [
  {
    path: "#",
    title: "Help Center",
  },
  {
    path: "#",
    title: "How to Book",
  },
  {
    path: "#",
    title: "Privacy Notice",
  },
  {
    path: "#",
    title: "Terms & Conditions",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-[70px] pb-[30px]">
      <Container>
        <Row>
          <Col lg="3" className="mb-3 md:!mb-0">
            <div>
              <img src={logo} alt="Logo" className=" w-[35%] lg:w-[50%] mb-4" />
              <p className="text-textColor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus voluptas eos ex velit nesciunt.
              </p>
              <div className="flex items-center gap-4 mt-4 mb-4 md:!mb-[0]">
                {socialLinks.map((item, index) => {
                  return (
                    <span key={index}>
                      <Link
                        to={item.path}
                        target="blank"
                        className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex
                        items-center justify-center group hover:bg-secondaryColor hover:border-none transition-colors"
                      >
                        {item.icon}
                      </Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col lg="3" className="mb-3 md:!mb-0">
            <h5 className="text-headingColor mb-3 font-medium text-[1.3rem]">
              Quick Links
            </h5>

            <ListGroup>
              {quickLinks.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="ps-0 border-none">
                    <Link
                      className="text-textColor text-[1.1rem] hover:text-secondaryColor hover:underline"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3" className="mb-3 md:!mb-0">
            <h5 className="text-headingColor mb-3 font-medium text-[1.3rem]">
              About Travel
            </h5>

            <ListGroup>
              {solutionLinks.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="ps-0 border-none">
                    <Link
                      className="text-textColor text-[1.1rem] hover:text-secondaryColor hover:underline"
                      to={item.path}
                    >
                      {item.title}
                    </Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="text-headingColor mb-3 font-medium text-[1.3rem]">
              Contact
            </h5>
            <ListGroup>
              <ListGroupItem className="ps-0 flex items-center border-none">
                <RiMailLine className="w-5 h-4" />
                <span className="mr-1 ml-2">Email:</span>
                <Link
                  to="mailto:medicaresupport@gmail.com"
                  className=" hover:text-secondaryColor hover:underline  text-[16px] leading-7 font-[400] text-textColor 
                  overflow-hidden whitespace-nowrap text-ellipsis max-w-[250px]"
                >
                  travelsupport@gmail.com
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 flex items-center border-none">
                <RiPhoneLine className="w-5 h-5" />
                <span className="mr-1 ml-2">Phone:</span>
                <Link
                  to="tel:+841911061117"
                  className=" hover:text-secondaryColor hover:underline  text-[16px] leading-7 font-[400] text-textColor"
                >
                  +84 1911061117
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 flex items-center border-none">
                <BiMap className="w-5 h-5" />
                <span className="mr-1 ml-2">Address:</span>
                <span className="text-[16px] leading-7 font-[400] text-textColor">
                  HaNoi,VietNam
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center mt-4">
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4  ">
              Copyright © {year} VanVuong
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
