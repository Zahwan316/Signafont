import { useState } from "react";
import { MenuPengenalan } from "..";
import { ACCENT_COLOR, NEUTRAL_COLOR, SECONDARY_COLOR } from "../../../constant/color";
import SignAlphabet from "../../../data/sign";
import usePengenalanStore from "../../../state/pengenalan";
import {motion} from "motion/react"
import SecondaryButtonComponent from "../../../component/button/secondary";

const SignSection = () => {
  const handlerMenu = usePengenalanStore((state) => state.setMenu);
  const [page, setpage] = useState<number>(1);

  const handleNextPage = () => {
    setpage(2);
  }

  const handlePrevPage = () => {
    setpage(1);
  }

  return(
    <div className='w-full ' >
      <div className="w-full p-6  rounded-xl mb-8" style={{backgroundColor: NEUTRAL_COLOR}}>
        <div className="flex flex-wrap gap-8">
          {
            SignAlphabet.map((item, index) => 
              index < 15 && page === 1 ?
                <div>
                  <img
                    src={item.url}
                    key={index}
                  />
                </div>
                : (index >= 15 && index < SignAlphabet.length && page === 2) &&
                <div>
                  <img
                    src={item.url}
                    key={index}
                  />
                </div>
            )
          }
        </div>
        <div className='h-12 w-full flex flex-row items-center'>
          {
            page === 1 ?
            <SecondaryButtonComponent
              onClick={handleNextPage}
              title="Next"
            />
            :
            <SecondaryButtonComponent
              onClick={handlePrevPage}
              title="Prev"
            />


          }
        </div>
      </div>
      <div className='w-full flex flex-row justify-start items-center'>
        <SecondaryButtonComponent
          onClick={() => handlerMenu(MenuPengenalan.main)}
          title="Back To Pengenalan"
        />
      </div>

    </div>
  )
}

export default SignSection;