import { useEffect } from "react"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../constant/color"
import ButtonComponent from "../../component/button"
import RoundedProgress from "../../component/rounded_progress"
import { useNavigate } from "react-router-dom"

const HomeSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (url: string) => {
      navigate(url);
    }

  return (
    <div className={"relative border border-green flex flex-col justify-between"} style={{ backgroundColor: PRIMARY_COLOR, height: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
      <div></div>
      <div></div>
      <div className={`w-full bg-white relative text-center border border-blue-400 h-5/12 rounded-t-[45px] p-8 flex flex-col justify-between`} >
        <div className="">
          <h2 className="font-bold text-[24px] mb-4" style={{ color: PRIMARY_COLOR }}>Belajar BISINDO jadi seru dan mudah, yuk mulai sekarang!</h2>
          <p className={``} style={{ color: SECONDARY_COLOR }}>Selamat datang di website belajar BISINDO interaktif dengan flashcard dan mini games seru.</p>
        </div>
        <div>
          {/* Step Button */}
          <RoundedProgress />
          <ButtonComponent
            title="Get Started"
            color=""
            onClick={() => handleNavigation('/login')}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeSection