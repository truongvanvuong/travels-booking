import { useState, useEffect, useRef } from "react";

import { BsArrowUp } from "react-icons/bs";

const BackTop = () => {
  const [botom, setBotom] = useState("bottom-0");
  const [translate, setTranslate] = useState("translate-y-full");
  const [visible, setVisible] = useState("invisible");
  const backTopRef = useRef(null);
  useEffect(() => {
    const showBackTop = () => {
      if (window.scrollY > 100 || document.body.scrollTop > 100) {
        setVisible("visible");
        setTranslate("translate-y-0");
        setBotom("bottom-6");
      } else {
        setTranslate("translate-y-full");
        setBotom("bottom-0");
        setVisible("invisible");
      }
    };
    window.addEventListener("scroll", showBackTop);
    return () => {
      window.removeEventListener("scroll", showBackTop);
    };
  }, []);
  const handleBackTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      ref={backTopRef}
      onClick={handleBackTop}
      className={`z-[1000] flex fixed ${visible} ${botom} ${translate} right-4 md:right-7 w-12 h-12 bg-secondaryColor rounded-full items-center
      justify-center cursor-pointer hover:shadow-3xl hover:-translate-y-[6px] transition-transform ease-linear duration-300`}
    >
      <BsArrowUp className="h-6 w-6 text-white" />
    </div>
  );
};

export default BackTop;
