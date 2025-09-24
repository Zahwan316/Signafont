import FloatingMenuComponent from "../../component/floating_menu"
import { PRIMARY_COLOR } from "../../constant/color"

const GameSection = () => {
  return(
    <div style={{minHeight: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>


      <FloatingMenuComponent />
    </div>
  )
}

export default GameSection