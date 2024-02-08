import React, { useEffect, useState } from "react";
import "./ProductOverviewSection.css";
import { useWindowSize } from "../../WindowSizeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonComponent from "../../buttonComponent/ButtonComponent";

const ProductOverviewSection = ({
  title,
  paragraph,
  smParagraph,
  btnContent,
  btnDesign,
  backgroundColor,
  children,
}) => {
  //responsive
  const { width } = useWindowSize();
  const [homeSectionRes, setHomeSectionRes] = useState(false);
  useEffect(() => {
    if (width < 750) {
      setHomeSectionRes(true);
    } else {
      setHomeSectionRes(false);
    }
  }, [width]);

  //animation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const homeContentVariants = {
    hidden: { y: 10, scale: 0.9, opacity: 0 },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={`vertical-home-section ${backgroundColor ? "black" : ""} ${
        homeSectionRes ? "sm" : ""
      }`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        variants={homeContentVariants}
        animate={inView ? "visible" : "hidden"}
        className={`vertical-home-section-content ${
          homeSectionRes ? "sm" : ""
        }`}
      >
        <h1> {title} </h1>
        <p> {paragraph} </p>
        {smParagraph && <h2>{smParagraph}</h2>}
        <ButtonComponent content={btnContent} designType={btnDesign} />
      </motion.div>
      {children}
    </motion.div>
  );
};

export default ProductOverviewSection;
