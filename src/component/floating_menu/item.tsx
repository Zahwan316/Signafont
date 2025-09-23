import {  useEffect, type ReactNode } from "react";
import { ACCENT_COLOR, NEUTRAL_COLOR } from "../../constant/color";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

type props = {
  img: ReactNode,
  onClick: () => void,
  url: string,
}
const FloatingMenuItemComponent = (props: props) => {
  const currUrl = useLocation().pathname

  useEffect(() => {
    console.log(currUrl)
    
  })

  return(
    <motion.div onClick={props.onClick} whileTap={{scale: 0.8}} className='w-14 h-14 rounded-full flex justify-center items-center' style={{backgroundColor: currUrl === props.url ? ACCENT_COLOR : NEUTRAL_COLOR}}>
      {props.img}
    </motion.div>
  )
}

export default FloatingMenuItemComponent;