import React, { useState } from "react";
import "./CarouselComponent.css";
import { useWindowSize } from "../WindowSizeContext";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CardComponent from "../cardComponent/CardComponent";

const cardValues = [
  {
    moneyAmount: "3.126€",
    cardBtnContent: "Main ↓",
    cardTitle: "Groceries",
    whenPosted: "just now",
    pointsEarned: "50",
    icon: "grocery",
    backgroundImage: "./assets/cardGirl.png",
  },
  {
    moneyAmount: "2.540",
    cardBtnContent: "Revpoints",
    cardTitle: "Revolut Stays",
    whenPosted: "",
    pointsEarned: "740",
    icon: "apartment",
    backgroundImage: "./assets/cardRevpoints.png",
  },
  {
    moneyAmount: "4.500€",
    cardBtnContent: "Joint Account ↓",
    cardTitle: "Trip Account",
    whenPosted: "Weekend trip",
    pointsEarned: "21.5",
    icon: "invoice",
    backgroundImage: "./assets/cardWeekend.png",
  },
  {
    moneyAmount: "250€",
    cardBtnContent: "Kiddo Account ↓",
    cardTitle: "10€ Request",
    whenPosted: "50min ago",
    pointsEarned: "75",
    icon: "invoice",
    backgroundImage: "./assets/cardKiddo.png",
  },
  {
    moneyAmount: "2.843€",
    cardBtnContent: "Bills ↓",
    cardTitle: "Utility bills",
    whenPosted: "08:28",
    pointsEarned: "15",
    icon: "house",
    backgroundImage: "./assets/cardBills.png",
  },
  {
    moneyAmount: "20.126¥",
    cardBtnContent: "Japan JPY ↓",
    cardTitle: "Drinks",
    whenPosted: "11:30",
    pointsEarned: "300",
    icon: "cutlery",
    backgroundImage: "./assets/cardJPN.png",
  },
];

const CarouselComponent = () => {
  const {deviceType} = useWindowSize();
  //define images
  const [imageIndex, setImageIndex] = useState(0);

  //define settings for carousel
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: deviceType==="mobile" ? 2 : 3,
    centerMode: deviceType==="mobile" ? false : true,
    centerPadding: 0,
    arrows: false,
    draggable: true,
    dots: true,
    focusOnSelect: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  //animation
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const carouselVariants = {
    hidden: { y: 50, scale: 1.1, opacity: 0 },
    visible: {
      y: 0,
      scale: 0.9,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.7 },
    },
  };

  return (
    <motion.div
      className={`carousel-component ${deviceType}`}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={carouselVariants}
      style={{ overflow: "hidden" }}
    >
      <Slider {...settings}>
        {cardValues.map((item, index) => (
          <div
            key={index}
            className={index === imageIndex ? "slide activeSlide" : "slide"}
          >
            <CardComponent designType="primaryWhiteBtn" {...item} />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default CarouselComponent;
