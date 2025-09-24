import {motion} from 'motion/react';
import { ACCENT_COLOR } from '../../constant/color';

type props = {
  title: string,
  onClick: () => void
}

const SecondaryButtonComponent = (props: props) => {
  return(
    <motion.button onClick={props.onClick} whileTap={{scale: 0.8}} className="w-auto p-2 rounded-xl" style={{backgroundColor: ACCENT_COLOR}}>{props.title}</motion.button>
  )
}

export default SecondaryButtonComponent