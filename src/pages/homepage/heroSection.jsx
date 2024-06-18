import Paragraph from "../../components/Paragraph";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import { arrowBlue } from "/src/assets/index.js";
import { motion } from "framer-motion";

import {
  clutchicon,
  cnnIcon,
  googleIcon,
  heroBanner,
  herobgGradient,
  slackIcon,
  trustPilotIcon,
} from "../../assets";

const headerAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childAnimation = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HeroSection = () => {
  return (
    <section>
      <motion.div
        variants={headerAnimation}
        initial="hidden"
        animate="show"
        className="-z-10 max-w-screen-2xl mx-auto md:px-20 md:py-6 py-4 px-5 mt-[44px] text-center flex flex-col gap-6 relative"
      >
        <motion.h1
          variants={childAnimation}
          className="font-inter text-[#172026] md:text-[64px] md:font-semibold md:max-w-4xl max-w-3xl mx-auto font-medium text-[32px] md:leading-[72px] leading-[40px]"
        >
          Start monitoring your website like a pro
        </motion.h1>
        <div className="md:max-w-4xl max-w-3xl text-center mx-auto">
          <Paragraph>
            <motion.p variants={childAnimation}>
              Get a bird's eye view with our customizable
              dashboard. Stay on top of things! Revamp your
              work process with our game-changing feature.
              Boost productivity and efficiency!
            </motion.p>
          </Paragraph>
        </div>
        <motion.div
          variants={childAnimation}
          className="flex justify-center gap-10 lg:gap-6 flex-wrap"
        >
          <ButtonPrimary>Try for free</ButtonPrimary>
          <ButtonSecondary
            textColor="#4328EB"
            arrowIcon={arrowBlue}
          >
            View Pricing
          </ButtonSecondary>
        </motion.div>
      </motion.div>

      <div className="relative flex h-full w-full">
        <img
          src={herobgGradient}
          className="min-h-[511px] md:min-h-[777px] lg:min-h-[888px] 2xl:min-h-[1000px] object-cover w-full"
        />

        <div className="absolute top-10 flex items-center flex-col w-full px-5 ">
          <img
            src={heroBanner}
            className="h-[251px] object-contain md:h-[555px] 2xl:h-[777px]"
          />
          <div className="grid grid-cols-3 items-center gap-5 py-5 lg:grid-cols-5 justify-items-center">
            <motion.img
              src={googleIcon}
              alt="brand-icons"
              variants={childAnimation}
            />
            <motion.img
              src={slackIcon}
              alt="brand-icons"
              variants={childAnimation}
            />
            <motion.img
              src={trustPilotIcon}
              alt="brand-icons"
              variants={childAnimation}
            />
            <motion.img
              src={cnnIcon}
              alt="brand-icons"
              variants={childAnimation}
            />
            <motion.img
              src={clutchicon}
              alt="brand-icons"
              variants={childAnimation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
