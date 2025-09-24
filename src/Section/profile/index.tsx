import { ACCENT_COLOR, NEUTRAL_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../../constant/color";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingMenuComponent from "../../component/floating_menu";
import { ArrowLeftIcon } from "../../component/icon";

import {motion} from "motion/react"
import { useNavigate } from "react-router-dom";

const ProfileSection = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return(
    <div className='flex flex-col justify-self-auto' style={{minHeight: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>
      <div className='w-full h-[15vh] flex justify-left items-center px-8 z-1'>
        <motion.div whileTap={{scale: 0.9}} className='w-12 h-12 flex justify-center items-center rounded-xl' style={{backgroundColor: ACCENT_COLOR}} onClick={() => navigate('/home')}>
          <ArrowLeftIcon />
        </motion.div>

      </div>
      <div className="w-full h-[85vh] z-6 ">
        <div className="h-[30%] z-1">
          
        </div>
        <div className='bg-white h-[70%] rounded-t-[45px] z-30 relative'>
          <div className="w-full h-32 flex flex-row justify-center items-center relative z-30" >
            <div className='rounded-full w-48 h-48 absolute top-[-11vh] z-30 overflow-x-visible flex flex-row justify-center items-center' style={{backgroundColor: NEUTRAL_COLOR}}>
              <img src='/img/Image.png' />
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center mb-8'>
            <h2 className='font-bold text-4xl mb-2' style={{ color: PRIMARY_COLOR }}>Welcome!</h2>
            <p className='font-bold text-xl' style={{color: SECONDARY_COLOR}}>Miko </p>
          </div>
          <div className="w-full h-32 flex flex-row justify-center items-center">
            <div className='w-96'>
              <Slider {...settings} >
                <div className="h-32 w-16 p-4 flex flex-row rounded-[25px] justify-center items-center bg-[#C7DDEF]" style={{backgroundColor: PRIMARY_COLOR}}>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
              </Slider>

            </div>
          </div>
        </div>
      </div>
      <FloatingMenuComponent />
    </div>
  )
}

export default ProfileSection;