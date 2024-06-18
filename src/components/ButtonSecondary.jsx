import { motion } from "framer-motion";

const ButtonSecondary = (props) => {
  const { textColor, arrowIcon, children } = props;
  return (
    <motion.button
      whileTap={{
        scale: 0.85,
      }}
      style={{
        color: textColor,
        transition: "all 0.3s",
      }}
      className="flex gap-3 font-inter py-4 px-4 md:py-4 md:px-8 hover:opacity-70 hover:backdrop-blur-lg hover:bg-opacity-60 hover:shadow"
    >
      {children} <img src={arrowIcon} />
    </motion.button>
  );
};

export default ButtonSecondary;
