import { Element } from "react-scroll";
import { details, features } from "../../constants";
import Button from "../ui/Button";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Features = () => {
  const sectionRef = useRef(null);
  const detailsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const scaleSection = useTransform(scrollYProgress, [0, 0.7], ["0.4", "1"]);

  const variantDetails = {
    initial: { scale: 0.2 },
    animate: {
      scale: [0.2, 1.2, 1],
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };
  const detailBoxInView = useInView(detailsRef);

  return (
    <motion.section ref={sectionRef} style={{ scale: scaleSection }}>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3  max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={feature.icon}
                      className="size-28 object-contain"
                      alt={feature.title}
                    />
                  </div>
                </div>

                <motion.p className="caption mb-5 max-md:mb-6 max-md:h6">
                  {feature.caption}
                </motion.p>
                <motion.h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {feature.title}
                </motion.h2>
                <motion.p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                  {feature.text}
                </motion.p>
                <Button icon={feature.button.icon}>
                  {feature.button.title}
                </Button>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map((detail) => (
                <li key={detail.id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s3 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <motion.img
                      src={detail.icon}
                      alt={detail.title}
                      className="size-17/20 object-contain z-20"
                      ref={detailsRef}
                      variants={variantDetails}
                      initial="initial"
                      animate={detailBoxInView && "animate"}
                    />
                  </div>

                  <motion.h3
                    className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase"
                    ref={detailsRef}
                    variants={variantDetails}
                    initial="initial"
                    animate={detailBoxInView && "animate"}
                  >
                    {detail.title}
                  </motion.h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </motion.section>
  );
};

export default Features;
