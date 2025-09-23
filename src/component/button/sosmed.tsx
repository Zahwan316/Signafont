import type { ReactNode } from "react";
import { NEUTRAL_COLOR, SECONDARY_COLOR } from "../../constant/color";
import {motion} from "motion/react";

type props = {
  name: string,
  icon: ReactNode,
}

const SosmedButton = (Props: props) => {
  return(
    <motion.button
      whileTap={{scale: 0.9}}
      className='w-full p-4 h-12 rounded-xl flex flex-row justify-center items-center gap-4 mb-4'
      style={{
        backgroundColor: NEUTRAL_COLOR,
      }}
    >
      <i>
        {Props.icon}
      </i>
      <p className="font-semibold">Log In with {Props.name} </p>
    </motion.button>
  )
}

export default SosmedButton;