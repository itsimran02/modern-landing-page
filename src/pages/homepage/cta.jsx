import React from "react";
import { bgCta } from "../../assets";
import Paragraph from "../../components/Paragraph";
import { motion } from "framer-motion";

const Cta = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-5 md:px-20 ">
      <div
        style={{
          backgroundImage: `url(${bgCta})`,
          backgroundPosition: "center",
        }}
        className="bg-no-repeat bg-cover py-[56px] lg:py-[90px] flex flex-col items-center justify-center text-center gap-6 lg:gap-10 rounded-[12px]"
      >
        <h3 className="text-white text-[32px] font-inter lg:leading-[64px] font-medium lg:text-[56px] text-center">
          Monitor your website <br />
          like a pro
        </h3>
        <Paragraph color={"#fff"}>
          Join over 800+ happy site owners boosting
          productivity and efficiency!
        </Paragraph>
        <motion.button
          whileTap={{
            scale: 0.8,
          }}
          className="text-[#EB2891] text-base font-medium font-inter py-[16px] px-[32px] bg-[#FFF] rounded-[4px] mt-auto"
        >
          Try for free
        </motion.button>
      </div>
    </section>
  );
};

export default Cta;
