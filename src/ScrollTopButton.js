import React, { useState, useEffect } from "react";
import "./ScrollTopButton.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="scroll-top"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollTopButton;