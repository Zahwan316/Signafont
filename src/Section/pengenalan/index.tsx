import FloatingMenuComponent from "../../component/floating_menu";
import { PRIMARY_COLOR } from "../../constant/color";

const PengenalanSection = () => {
  return(
    <div className="" style={{minHeight: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>
      <div className="p-8 py-12 text-white">
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
      </div>
      <FloatingMenuComponent />
    </div>
  )
}

export default PengenalanSection;