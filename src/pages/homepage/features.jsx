import { motion } from "framer-motion";
import {
  arrowGreen,
  arrowPink,
  arrowSkyBlue,
  checkIcon,
  featureImage1,
  featureImage2,
  featureImage3,
} from "../../assets";
import ButtonSecondary from "../../components/ButtonSecondary";
import HeadingSecondary from "../../components/HeadingSecondary";
import Paragraph from "../../components/Paragraph";

const animate = {
  start: {
    opacity: 0,
    y: 100,
  },
  end: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
  },
};

const Features = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 md:py-28 px-5 py-14 flex flex-col gap-12 md:gap-20">
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        className="flex"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:gap-8 flex-1 md:py-14 md:pr-14 md:pb-14">
          <p className="text-[#0085FF] font-inter text-base -mb-4">
            Sales Monitoring
          </p>
          <HeadingSecondary>
            Simplify your sales monitoring
          </HeadingSecondary>
          <img src={featureImage1} className="md:hidden" />
          <Paragraph>
            Stay on top of things and revamp your work
            process with our game-changing feature. Get a
            bird's eye view with our customizable dashboard.{" "}
          </Paragraph>
          <div className="flex flex-col gap-4">
            <div className="flex  items-start gap-4">
              <img src={checkIcon} />
              <Paragraph>
                Lorem ipsum dolor sit amet
              </Paragraph>
            </div>
            <div className="flex items-start gap-4">
              <img src={checkIcon} />
              <Paragraph>
                Consectetur adipiscing elit
              </Paragraph>
            </div>
            <div className="flex items-start gap-4">
              <img src={checkIcon} />
              <Paragraph>
                Sed do eiusmod tempor incididunt ut labore
              </Paragraph>
            </div>
            <ButtonSecondary
              arrowIcon={arrowSkyBlue}
              textColor={"#0085FF"}
            >
              Learn More
            </ButtonSecondary>
          </div>
        </div>
        <div className="hidden md:block flex-1">
          <img
            src={featureImage1}
            className="h-[550px] w-full object-cover"
          />
        </div>
      </motion.div>
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        className="flex"
        viewport={{ once: true }}
      >
        <div className="hidden md:block flex-1">
          <img
            src={featureImage2}
            className="h-[550px] w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-8 flex-1 md:py-14 md:pl-14 md:pb-14">
          <p className="text-[#00A424] font-inter text-base -mb-4">
            Customer Support
          </p>
          <HeadingSecondary>
            Get in touch with your customers
          </HeadingSecondary>
          <img src={featureImage2} className="md:hidden" />
          <Paragraph>
            Stay on top of things and revamp your work
            process with our game-changing feature. Get a
            bird's eye view with our customizable dashboard.
          </Paragraph>
          <div className="flex flex-col gap-4">
            <div className="flex  items-start gap-4">
              <img src={checkIcon} />
              <Paragraph>
                Lorem ipsum dolor sit amet
              </Paragraph>
            </div>
            <div className="flex items-start gap-4">
              <img src={checkIcon} />
              <Paragraph>
                Consectetur adipiscing elit
              </Paragraph>
            </div>
            <div className="flex items-start gap-4">
              <img src={checkIcon} />
              <Paragraph>
                Sed do eiusmod tempor incididunt ut labore
              </Paragraph>
            </div>
            <ButtonSecondary
              arrowIcon={arrowGreen}
              textColor={"#00A424"}
            >
              Learn More
            </ButtonSecondary>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={animate}
        initial="start"
        whileInView="end"
        className="flex"
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-6 md:gap-8 flex-1 md:py-14 md:pr-14 md:pb-14">
          <p className="text-[#EB2891] font-inter text-base -mb-4">
            Growth Monitoring
          </p>
          <HeadingSecondary>
            Monitor your site’s new subscribers
          </HeadingSecondary>
          <img src={featureImage3} className="md:hidden" />
          <Paragraph>
            Stay on top of things and revamp your work
            process with our game-changing feature. Get a
            bird's eye view with our customizable dashboard.{" "}
          </Paragraph>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 ">
              <div className="flex-1">
                <p className="text-[#172026] text-[20px] md:text-[32px] font-medium font-inter">
                  100+
                </p>
                <p className="text-[#5F7896] md:text-lg text-base">
                  Lorem ipsum dolor sit
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[#172026] text-[20px] md:text-[32px] font-medium font-inter">
                  800+
                </p>
                <p className="text-[#5F7896] md:text-lg text-base">
                  Conse adipiscing elit
                </p>
              </div>
            </div>
            <ButtonSecondary
              arrowIcon={arrowPink}
              textColor={"#EB2891"}
            >
              Learn More
            </ButtonSecondary>
          </div>
        </div>
        <div className="hidden md:block flex-1">
          <img
            src={featureImage3}
            className="h-[550px] w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
