import { useState } from "react";
import { NEUTRAL_COLOR} from "../../../constant/color";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignAlphabet from "../../../data/sign";

const SignSection = () => {
  const [page] = useState<number>(1)



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <div className='w-full ' >
      <Slider {...settings} >
        <div className="w-full p-6 rounded-xl mb-8 bg-[#BBD7EC]" style={{backgroundColor: NEUTRAL_COLOR}}>
          <div className="flex flex-wrap gap-8">
            {
              SignAlphabet.map((item, index) => 
                index < 15 && page === 1 &&
                  <div>
                    <img
                      src={item.url}
                      key={index}
                    />
                  </div>
                  )
            }                     
          </div>
        
          
        </div>
        <div className="w-full p-6 h-full rounded-xl mb-8 bg-[#BBD7EC]" style={{backgroundColor: NEUTRAL_COLOR}}>
          <div className="flex flex-wrap gap-8">
            {
              SignAlphabet.map((item, index) => 
                index >= 15 && index < SignAlphabet.length &&
                <div>
                  <img
                    src={item.url}
                    key={index}
                  />
                </div>
              )
            } 
            
          </div>
        </div>
      </Slider>
      {/* <div className='w-full flex flex-row justify-start items-center'>
        <SecondaryButtonComponent
          onClick={() => handlerMenu(MenuPengenalan.main)}
          title="Back To Pengenalan"
        />
      </div> */}

    </div>
  )
}

export default SignSection;