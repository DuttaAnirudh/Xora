import { Element } from "react-scroll";
import Marker from "../ui/Marker";
import { logos } from "../../constants";
import Ios from "../ui/Ios";
import Android from "../ui/Android";
import Windows from "../ui/Windows";
import Web from "../ui/Web";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LinkItem {
  id: string;
  title: string;
  icon: React.ReactElement;
  url: string;
}

const links: LinkItem[] = [
  {
    id: "0",
    title: "Ios",
    icon: <Ios />,
    url: "#",
  },
  {
    id: "1",
    title: "Android",
    icon: <Android />,
    url: "#",
  },
  {
    id: "2",
    title: "Windows",
    icon: <Windows />,
    url: "#",
  },
  {
    id: "3",
    title: "Web",
    icon: <Web />,
    url: "#",
  },
];

const Downloads = () => {
  const clientLogosRef = useRef(null);
  const appLogosRef = useRef(null);

  const variantClientsLogo = {
    initial: { y: 45, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        staggerChildren: 0.4,
      },
    },
  };

  const variantAppLogo = {
    initial: { x: 45, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        staggerChildren: 0.4,
      },
    },
  };

  const clientLogoInView = useInView(clientLogosRef);
  const appLogoInView = useInView(appLogosRef);

  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-12"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                favor, we've got you covered
              </p>

              <motion.ul
                className="flex flex-wrap items-center gap-6"
                ref={appLogosRef}
                variants={variantAppLogo}
                initial="initial"
                animate={appLogoInView && "animate"}
              >
                {links.map((link) => (
                  <motion.li
                    key={link.id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                    variants={variantAppLogo}
                  >
                    <a
                      href={link.url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src="/images/lines.svg"
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{link.icon}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounnded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.ul
            ref={clientLogosRef}
            className="mt-24 flex justify-center max-lg:hidden"
            variants={variantClientsLogo}
            initial="initial"
            animate={clientLogoInView && "animate"}
          >
            {logos.map((logo) => (
              <motion.li
                className="mx-10"
                key={logo.id}
                variants={variantClientsLogo}
              >
                <img
                  src={logo.url}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.title}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Element>
    </section>
  );
};

export default Downloads;
