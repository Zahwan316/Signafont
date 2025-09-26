import { ACCENT_COLOR } from "../../../constant/color";
import { motion } from "motion/react";
import usePengenalanStore from "../../../state/pengenalan";
import { MenuPengenalan } from "..";
import { RightIcon } from "../../../component/icon";

const MenuPengenalanSection = () => {
  const handlerMenu = usePengenalanStore((state) => state.setMenu);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 max-w-4xl mx-auto">
      {/* Main Title and Introduction */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <h2 className="font-bold border-b-2 text-center text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 pb-2 sm:pb-3">
          Apa itu BISINDO?
        </h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          BISINDO atau Bahasa Isyarat Indonesia merupakan bahasa isyarat alami yang muncul di komunitas Tuli dan menjadi bahasa Ibu bagi kalangan Tuli dan bervariasi di tiap daerahnya.
        </p>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/img/pengenalan.png" 
            alt="BISINDO Introduction"
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

      {/* Inclusive Communication Section */}
      <div className="mb-6 sm:mb-8">
        <h2 className="font-bold text-lg sm:text-xl md:text-xl mb-2 sm:mb-3">
          Komunikasi yang Inklusif
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          BISINDO efektif untuk mengurangi hambatan komunikasi, tidak hanya bagi Tuli, tetapi juga untuk semua orang agar tercipta lingkungan yang inklusif.
        </p>
      </div>

      {/* Collaboration & Additional Information Section */}
      <div className="mb-6 sm:mb-8">
        <h2 className="font-bold text-lg sm:text-xl md:text-xl mb-2 sm:mb-3">
          Kolaborasi & Informasi Lanjutan
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          Website ini dikembangkan oleh mahasiswa Tuli dan Dengar UPI untuk memperkenalkan BISINDO. Info lebih lanjut bisa diakses melalui Pusbisindo di pusbisindo.org
        </p>
      </div>

      {/* Next Button */}
      <div className="w-full flex flex-row justify-end items-center mt-6 sm:mt-8">
        <motion.button 
          onClick={() => handlerMenu(MenuPengenalan.alphabet)} 
          whileTap={{ scale: 0.8 }} 
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 p-2 sm:p-2.5 md:p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center" 
          style={{ backgroundColor: ACCENT_COLOR }}
          aria-label="Go to Alphabet Section"
        >
          <RightIcon />
        </motion.button>
      </div>
    </div>
  );
}

export default MenuPengenalanSection;