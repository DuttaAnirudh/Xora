import { Element, Link } from "react-scroll";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const variantHero = {
    initial: { opacity: 0, y: "100px" },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.6,
      },
    },
  };

  const variantImageHero = {
    initial: { filter: "grayscale(100%)" },
    animate: {
      filter: "grayscale(0%)",
      transition: {
        delay: 0.7,
        duration: 5.5,
        type: "spring",
      },
    },
  };

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <motion.div
            className="relative z-2 max-w-512 max-lg:max-w-388"
            variants={variantHero}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={variantHero}
              className="caption small-2 uppercase text-p3"
            >
              Video Editing
            </motion.div>
            <motion.h1
              variants={variantHero}
              className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Amazingly simple
            </motion.h1>
            <motion.p
              variants={variantHero}
              className="max-w-440 mb-14 body-1 max-md:mb-10"
            >
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn and surprisingly powerful
            </motion.p>
            <Link to="features" offset={-100} spy smooth>
              <Button variants={variantHero} icon="/images/zap.svg">
                Try it now
              </Button>
            </Link>
          </motion.div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <motion.img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero image"
              variants={variantImageHero}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
