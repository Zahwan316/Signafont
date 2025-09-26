import { ACCENT_COLOR, NEUTRAL_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../../constant/color";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingMenuComponent from "../../component/floating_menu";
import { ArrowLeftIcon } from "../../component/icon";
import { motion } from "motion/react";
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
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/home');
  }

  return (
    <div 
      className='flex flex-col justify-self-auto' 
      style={{
        minHeight: '100vh', 
        backgroundImage: "url('/img/Opening.png')", 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundColor: PRIMARY_COLOR
      }}
    >
      {/* Header Section */}
      <div className='w-full h-[15vh] flex justify-left items-center px-4 sm:px-6 md:px-8 z-1'>
        <motion.div 
          whileTap={{scale: 0.9}} 
          className='w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-xl' 
          style={{backgroundColor: ACCENT_COLOR}} 
          onClick={handleLogout}
        >
          <ArrowLeftIcon />
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="w-full h-[85vh] z-6">
        {/* Spacer */}
        <div className="h-[20%] sm:h-[25%] md:h-[30%] z-1"></div>
        
        {/* Content Card */}
        <div className='bg-white h-[80%] sm:h-[75%] md:h-[70%] rounded-t-[25px] sm:rounded-t-[35px] md:rounded-t-[45px] z-30 relative'>
          {/* Profile Image Container */}
          <div className="w-full h-20 sm:h-24 md:h-32 flex flex-row justify-center items-center relative z-30">
            <div 
              className='rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 absolute top-[-8vh] sm:top-[-9vh] md:top-[-11vh] z-30 overflow-hidden flex flex-row justify-center items-center' 
              style={{backgroundColor: NEUTRAL_COLOR}}
            >
              <img 
                src='/img/Image.png' 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Welcome Text */}
          <div className='w-full flex flex-col justify-center items-center mb-4 sm:mb-6 md:mb-8 px-4'>
            <h2 
              className='font-bold text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 text-center' 
              style={{ color: PRIMARY_COLOR }}
            >
              Welcome!
            </h2>
            <p 
              className='font-bold text-lg sm:text-xl text-center' 
              style={{color: SECONDARY_COLOR}}
            >
              {userData?.username || "Miko"}
            </p>
          </div>

          {/* Slider Container */}
          <div className="w-full flex flex-row justify-center items-center px-4 sm:px-6 md:px-8">
            <div className='w-full max-w-sm sm:max-w-md md:max-w-96'>
              <Slider {...settings}>
                <div className="px-2">
                  <div 
                    className="h-24 sm:h-28 md:h-32 w-full p-3 sm:p-4 flex flex-row gap-3 sm:gap-4 md:gap-8 rounded-[15px] sm:rounded-[20px] md:rounded-[25px] justify-start items-center" 
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    <div className="w-16 sm:w-20 md:w-32 flex-shrink-0">
                      <img 
                        src='/img/logo.png' 
                        alt="Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <h2 
                        className="text-xs sm:text-sm md:text-md font-bold truncate" 
                        style={{color: PRIMARY_COLOR}}
                      >
                        23 September 2025
                      </h2>
                      <p 
                        className="text-sm sm:text-base md:text-lg font-bold leading-tight" 
                        style={{color: ACCENT_COLOR}}
                      >
                        Hari bahasa isyarat internasional
                      </p>
                      <span 
                        className="text-xs sm:text-sm leading-tight mt-1" 
                        style={{color: PRIMARY_COLOR}}
                      >
                        "Tidak ada hak asasi manusia, tanpa hak bahasa isyarat"
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="h-24 sm:h-28 md:h-32 w-full p-3 sm:p-4 flex flex-row justify-center items-center rounded-[15px] sm:rounded-[20px] md:rounded-[25px] bg-gray-100">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600">2</h3>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="h-24 sm:h-28 md:h-32 w-full p-3 sm:p-4 flex flex-row justify-center items-center rounded-[15px] sm:rounded-[20px] md:rounded-[25px] bg-gray-100">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600">3</h3>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <FloatingMenuComponent />
    </div>
  );
}

export default ProfileSection;