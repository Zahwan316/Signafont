import { SECONDARY_COLOR } from "../../constant/color"
import { motion } from "motion/react";

type props = {
  title: string,
  color?: string,
  size?: number,
  onClick?: () => void
}

const ButtonComponent = (Props: props) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
        transitionDuration: 0.1
      }}
      whileHover={{
        scale: 0.9
      }}
      className={" p-4 rounded-xl w-full"}
      style={{
        backgroundColor: SECONDARY_COLOR,
      }}
      color={Props.color || SECONDARY_COLOR}
      onClick={Props.onClick}
    >
      <p className="text-white">{Props.title}</p>
    </motion.button>
  )
}

export default ButtonComponent