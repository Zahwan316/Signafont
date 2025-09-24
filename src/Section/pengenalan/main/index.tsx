import { ACCENT_COLOR } from "../../../constant/color";
import {motion} from "motion/react"
import usePengenalanStore from "../../../state/pengenalan";
import { MenuPengenalan } from "..";
import { RightIcon } from "../../../component/icon";

const MenuPengenalanSection = () => {
  const handlerMenu = usePengenalanStore((state) => state.setMenu);

  return(
    <div>
      <div className="mb-4">
          <h2 className="font-bold border-b-2 text-center text-3xl mb-4">Apa itu BISINDO?</h2>
          <p className="mb-6 text-lg text-gray-200">BISINDO atau Bahasa Isyarat Indonesia merupakan bahasa isyarat alami yang muncul di komunitas Tuli dan menjadi bahasa Ibu bagi kalangan Tuli dan bervariasi di tiap daerahnya.</p>
          <div className="w-full">
            <img src='/img/pengenalan.png' className="w-full h-full" />
          </div>
        </div>
        <div className='mb-4'>
          <h2 className="font-bold text-xl mb-2">Komunikasi yang Inklusif</h2>
          <p className="text-lg text-gray-200">BISINDO efektif untuk mengurangi hambatan komunikasi, tidak hanya bagi Tuli, tetapi juga untuk semua orang agar tercipta lingkungan yang inklusif.</p>

        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Kolaborasi & Informasi Lanjutan</h2>
          <p className='text-lg text-gray-200'>Website ini dikembangkan oleh mahasiswa Tuli dan Dengar UPI untuk memperkenalkan BISINDO. Info lebih lanjut bisa diakses melalui Pusbisindo di pusbisindo.org</p>
        </div>
        <div className='w-full flex flex-row justify-end items-center'>
          <motion.button onClick={() => handlerMenu(MenuPengenalan.alphabet)} whileTap={{scale: 0.8}} className="w-12 p-2 rounded-lg" style={{backgroundColor: ACCENT_COLOR}}><RightIcon /></motion.button>
      </div>
    </div>
  )
}

export default MenuPengenalanSection;