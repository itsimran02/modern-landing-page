import React from "react";
import { motion } from "framer-motion";
import HeadingSecondary from "../../components/HeadingSecondary";
import { checkIcon, whiteCheckIcon } from "../../assets";
import Paragraph from "../../components/Paragraph";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Plans = () => {
  return (
    <section className="max-w-screen-2xl mx-auto md:px-20 px-5 py-12 lg:py-28 flex flex-col gap-10">
      <div className="flex items-center justify-center flex-col gap-4">
        <HeadingSecondary>
          Flexible plans for you
        </HeadingSecondary>
        <p className="font-inter text-base text-[#36485C] lg:text-lg">
          No hidden fees!
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#F5F4FF] p-6 flex flex-col gap-4 lg:gap-8 rounded-[8px]"
          variants={cardVariants}
        >
          <div>
            <p className="text-[#4328EB] text-lg lg:text-xl font-inter font-medium mb-3 lg:mb-4 rounded-[4px]">
              Free Trial
            </p>
            <Paragraph>
              Perfect for testing the waters
            </Paragraph>
          </div>
          <p className="text-2xl text-[#172026] font-inter lg:text-[32px] font-medium">
            $0<span className="text-[#5F7896]">/mo</span>
          </p>
          <div className="flex gap-4">
            <img src={checkIcon} />
            <Paragraph>
              Lorem ipsum dolor sit amet
            </Paragraph>
          </div>
          <div className="flex gap-4">
            <img src={checkIcon} />
            <Paragraph>
              Sed do eiusmod tempor incididunt
            </Paragraph>
          </div>
          <div className="flex gap-4">
            <img src={checkIcon} />
            <Paragraph>
              Consectetur adipiscing elit
            </Paragraph>
          </div>
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="text-[#4328EB] text-base font-medium font-inter py-[14px] px-[30px] bg-[#FFF] rounded-[4px] mt-auto"
          >
            Start Trial
          </motion.button>
        </motion.div>
        <motion.div
          className="bg-[#4328EB] p-6 flex flex-col gap-4 lg:gap-8 rounded-[8px]"
          variants={cardVariants}
        >
          <div>
            <p className="text-[#fff] text-lg lg:text-xl font-inter font-medium mb-3 lg:mb-4 rounded-[4px]">
              Premium
            </p>
            <Paragraph color={"#F4F8FA"}>
              Perfect for testing the waters
            </Paragraph>
          </div>
          <p className="text-2xl text-[#fff] font-inter lg:text-[32px] font-medium">
            $500<span className="text-[#fff]">/mo</span>
          </p>
          <div className="flex gap-4">
            <img src={whiteCheckIcon} />
            <Paragraph color={"#fff"}>
              Lorem ipsum dolor sit amet
            </Paragraph>
          </div>
          <div className="flex gap-4">
            <img src={whiteCheckIcon} />
            <Paragraph color={"#fff"}>
              Sed do eiusmod tempor incididunt
            </Paragraph>
          </div>
          <div className="flex gap-4">
            <img src={whiteCheckIcon} />
            <Paragraph color={"#fff"}>
              Consectetur adipiscing elit
            </Paragraph>
          </div>
          <div className="flex gap-4">
            <img src={whiteCheckIcon} />
            <Paragraph color={"#fff"}>
              Lorem ipsum dolor sit amet
            </Paragraph>
          </div>
          <div className="flex gap-4">
            <img src={whiteCheckIcon} />
            <Paragraph color={"#fff"}>
              Sed do eiusmod tempor incididunt
            </Paragraph>
          </div>
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="text-[#4328EB] text-base font-medium font-inter py-[14px] px-[30px] bg-[#FFF] rounded-[4px]"
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          className="bg-[#F5F4FF] p-6 flex flex-col gap-4 lg:gap-8 rounded-[8px]"
          variants={cardVariants}
        >
          <div>
            <p className="text-[#4328EB] text-lg lg:text-xl font-inter font-medium mb-3 lg:mb-4 rounded-[4px]">
              Enterprise
            </p>
            <Paragraph>Perfect for big companies</Paragraph>
          </div>
          <p className="text-2xl text-[#172026] font-inter lg:text-[32px] font-medium">
            Custom
          </p>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </Paragraph>
          <Paragraph>
            Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </Paragraph>
          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            className="text-[#4328EB] text-base font-medium font-inter py-[14px] px-[30px] bg-[#FFF] rounded-[4px] mt-auto"
          >
            Start Trial
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Plans;
