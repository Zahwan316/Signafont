import FloatingMenuComponent from "../../../component/floating_menu";
import { PRIMARY_COLOR } from "../../../constant/color";

const FlashCardSection = () => {
  return (
    <div style={{minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>
      <div className="w-full p-8">
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <h2 className="text-center text-white font-bold text-3xl mb-4">FlashCard</h2>
          <p className="text-center text-white text-sm">Peragakan isyaratnya, lalu tekan kartu unntuk melihat isyaratnya. </p>
        </div>
        <div className="w-full h-4/5 flex justify-center items-center mb-8">
          <img src='img/A.png' className="w-56 h-4/5"/>
        </div>
        <div className="w-full flex justify-center items-center relative">
          <img src="img/back_card.png" className="absolute top-2" />
          <img src="img/back_card.png" className="absolute left-2 top-2" />
          <img src="img/back_card.png" className="absolute left-3 top-2" />
          <img src="img/back_card.png" className="absolute left-4 top-2" />
          <img src="img/back_card.png" className="absolute left-5 top-2" />
          <img src="img/back_card.png" className="absolute left-6 top-2" />
          <img src="img/back_card.png" className="absolute left-7 top-2" />
        </div>
      </div>
      <FloatingMenuComponent />
    </div>
  )
}

export default FlashCardSection;