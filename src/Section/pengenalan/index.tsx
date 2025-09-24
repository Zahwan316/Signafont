import { useNavigate } from "react-router-dom";
import FloatingMenuComponent from "../../component/floating_menu";
import { ACCENT_COLOR, PRIMARY_COLOR } from "../../constant/color";
import {motion} from 'motion/react';
import { useState } from "react";
import MenuPengenalanSection from "./main";
import SignSection from "./sign";
import usePengenalanStore from "../../state/pengenalan";

export enum MenuPengenalan {
  main= "MAIN",
  alphabet= "ALPHABET",
}

const PengenalanSection = () => {
  const menu = usePengenalanStore((state) => state.menu);

  return(
    <div className="" style={{minHeight: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>
      <div className="p-8 py-12 text-white">
        {
          menu == MenuPengenalan.main ?
          <MenuPengenalanSection />
          :
          <SignSection />
        }
      </div>
      
      <FloatingMenuComponent />
    </div>
  )
}

export default PengenalanSection;