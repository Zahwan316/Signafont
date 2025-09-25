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
  const userData = JSON.parse(localStorage.getItem("userdata"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/home')
  }
  
  return(
    <div className='flex flex-col justify-self-auto' style={{minHeight: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>
      <div className='w-full h-[15vh] flex justify-left items-center px-8 z-1'>
        <motion.div whileTap={{scale: 0.9}} className='w-12 h-12 flex justify-center items-center rounded-xl' style={{backgroundColor: ACCENT_COLOR}} onClick={handleLogout}>
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
            <p className='font-bold text-xl' style={{color: SECONDARY_COLOR}}>{userData.username || "Miko"} </p>
          </div>
          <div className="w-full h-32 flex flex-row justify-center items-center">
            <div className='w-96'>
              <Slider {...settings} >
                <div className="h-32 w-full p-4 !flex flex-row gap-8 rounded-[25px] justify-start items-center bg-[#C7DDEF]" style={{ backgroundColor: PRIMARY_COLOR, display: 'flex !important', flexDirection: 'row' }}>
                  <div className="w-32">
                    <img src='/img/logo.png' />
                  </div>
                  <div className="w-56 flex flex-col !py-6">
                    <h2 className="!text-md !font-bold" style={{color: PRIMARY_COLOR}}>23 September 2025</h2>
                    <p className="!text-lg !font-bold" style={{color: ACCENT_COLOR}}>Hari bahasa isyarat internasional</p>
                    <span className="!text-sm" style={{color: PRIMARY_COLOR}}>"Tidak ada hak asasi manusia, tanpa hak bahasa isyarat"</span>
                  </div>
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