import { useState, useEffect } from "react";
import "./scrollToTop.scss";
import { BsArrowUpShort } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div onClick={scrollToTop}>
          <button className="btn__totop" type="button">
            <span>
              <BsArrowUpShort />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
