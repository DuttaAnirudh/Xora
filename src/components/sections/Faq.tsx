import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Element } from "react-scroll";
import { faqs } from "../../constants";
import FaqItem from "../ui/FaqItem";

const Faq = () => {
  const titleRef = useRef(null);
  const faqRef = useRef(null);

  const halfFaqsLength = Math.floor(faqs.length / 2);

  const variant = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.6,
      },
    },
  };

  const titleInView = useInView(titleRef);
  const faqInView = useInView(faqRef);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <motion.div
            variants={variant}
            initial="initial"
            animate={titleInView && "animate"}
          >
            <motion.h3
              ref={titleRef}
              variants={variant}
              className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4"
            >
              Curiosity did'nt kill the cat, it gave it answers.
            </motion.h3>
            <motion.p variants={variant} className="body-1 max-lg:max-w-sm">
              You've got questions, we've got answers.
            </motion.p>
          </motion.div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <motion.div
            ref={faqRef}
            variants={variant}
            initial="initial"
            animate={faqInView && "animate"}
            className="container flex gap-10 max-lg:block"
          >
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {faqs.slice(0, halfFaqsLength).map((faq, i) => (
                <FaqItem key={faq.id} faq={faq} index={i} />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {faqs.slice(halfFaqsLength).map((faq, i) => (
                <FaqItem key={faq.id} faq={faq} index={halfFaqsLength + i} />
              ))}
            </div>
          </motion.div>

          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
