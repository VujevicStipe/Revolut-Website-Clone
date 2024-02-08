// const scrollRef = useRef(null);
//   const contentControls = useAnimation();
//   const cardControls = useAnimation();
//   const cardSize = useAnimation();
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [isAnimationTrue, setAnimationTrue] = useState(false);

//   useEffect(() => {
//     const handleScroll = async () => {
//       const threshold = 50;
//       const shouldAnimate = window.scrollY > threshold;

//       if (shouldAnimate && !hasScrolled) {
//         await contentControls.start({ y: -window.innerHeight });
//         await cardControls.start({
//           height: "100vh",
//           width: "100vw",
//           backgroundColor: "white",
//           alignItems: "center",
//           justifyContent: "center",
//           // transition: {delay: 0.2}
//         });
//         await cardSize.start({
//           width: "25rem",
//           height: "50%",
//         });
//         setHasScrolled(true);
//         setAnimationTrue(true);
//       }

//       const currentScrollY = window.scrollY;
//       const scrollDirection = currentScrollY > threshold ? "down" : "up";

//       if (scrollDirection === "up" && hasScrolled) {
//         await contentControls.start({ y: 0 });
//         await cardControls.start({
//           justifyContent: "flex-end",
//           backgroundColor: "rgba(168, 168, 168, 0.2)",
//         });
//         await cardSize.start({
//           width: "24vw",
//           height: "29rem",
//         });
//         setHasScrolled(false);
//         setAnimationTrue(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [contentControls, cardControls, hasScrolled]);


//////////
{/* <div
      ref={scrollRef}
      style={{
        overflow: "hidden",
        scroll: "hidden",
        scrollbarGutter: a ? "auto" : "stable",
      }}
      className="hero-component"
    >
      <motion.div
        layout
        initial={{ y: 0 }}
        animate={contentControls}
        className="hero-component-content"
      >
        <HeroTitleComponent />
        <ParagraphComponent content={paragraphContent} textColorWhite={true} />
        <ButtonComponent
          content={buttonData}
          filled={true}
          btnColor={blackBtnColor}
          outlined={false}
          onClick={() => handleClick()}
        />
      </motion.div>
      <motion.div
        layout
        initial={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(168, 168, 168, 0.2)",
        }}
        animate={cardControls}
        style={{ overflow: "hidden", scroll: "hidden" }}
        className="hero-card-animation"
      >
        {isAnimationTrue && (
          <div className="hero-card-content">
            <h1>DOBRO POTROŠEN NOVAC</h1>
            <p>
              Kupujete namirnice? Zaradite RevPoints. Lutate ulicama Japana?
              Plaćajte u jenima. Velika životna promjena? Isprobajte zajednički
              račun. Neovisno o potrošnji – Revolut je sve što trebate.
            </p>
            <ButtonComponent content="Početak" filled={true} btnColor="black" />
          </div>
        )}
        <motion.div
          initial={{ width: "24vw", height: "29rem" }}
          animate={cardSize}
          className="hero-card-items"
        >
          {isAnimationTrue && <CardComponent />}
          <CardComponent />
          {isAnimationTrue && <CardComponent />}
        </motion.div>
      </motion.div>
      <img
        className="hero-girl"
        src="./assets/hero-img-girl.png"
        alt="hero-img-girl"
      />
      <img
        className="hero-sky"
        src="./assets/hero-img-sky.png"
        alt="hero-img-sky"
      />
    </div> */}