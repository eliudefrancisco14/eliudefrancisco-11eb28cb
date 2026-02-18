import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-flex" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span style={{ width: "0.3em" }}>&nbsp;</span>
          )}
        </span>
      ))}
    </motion.span>
  );
};
