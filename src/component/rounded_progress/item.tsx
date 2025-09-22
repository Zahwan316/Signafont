import { useState } from "react";
import { NEUTRAL_COLOR, PRIMARY_COLOR } from "../../constant/color";
import {motion} from "motion/react"

type props = {
  page?: string,
  active?: boolean
}

const RoundItemProgress = ({active = false}: props) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  const handleIsActive = () => {
    setIsActive(!isActive);
  }

  return <motion.div
      className={" rounded-full w-4 h-4"} 
      whileTap={{borderWidth: isActive ? 2 : 0}}
      style={{backgroundColor: NEUTRAL_COLOR, borderWidth: isActive ? 2 : 0, borderColor: PRIMARY_COLOR}} 
      onClick={handleIsActive}>
    </motion.div>
}

export default RoundItemProgress;