import { socials } from "../../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const variant = {
    initial: { x: 45, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        duration: 0.45,
        staggerChildren: 0.4,
      },
    },
  };
  const footerInView = useInView(footerRef);
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70 max-md:py-6">
              &copy; Copyright {new Date().getFullYear()}, XORA
            </p>
          </div>
          <div className="flex items-center justify-center md::ml-auto">
            <a
              href="#"
              className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-p5 transition-all duration-500 hover:text-p1"
            >
              Terms of Use
            </a>
          </div>

          <motion.ul
            className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end"
            ref={footerRef}
            variants={variant}
            initial="initial"
            animate={footerInView && "animate"}
          >
            {socials.map((social) => (
              <motion.li key={social.id} variants={variant}>
                <a href={social.url} className="social-icon">
                  <img
                    src={social.icon}
                    alt={social.title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
