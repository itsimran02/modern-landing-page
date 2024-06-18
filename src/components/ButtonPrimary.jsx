import { motion } from "framer-motion";

const ButtonPrimary = (props) => {
  const { children, textcolor = "white" } = props;

  return (
    <motion.button
      whileTap={{
        scale: 0.85,
      }}
      style={{
        color: textcolor,
        transition: "background-color 0.3s",
      }}
      className="py-4 px-4 md:py-4 md:px-8 font-inter rounded-[4px] bg-[#4328EB] hover:bg-[#211a5b]"
    >
      {children}
    </motion.button>
  );
};

export default ButtonPrimary;
