import { useNavigate } from "react-router-dom"
import { PRIMARY_COLOR } from "../../constant/color"
import { useEffect } from "react"

const SplashSection = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }, [])
  return(
    <div style={{minHeight: '100vh', backgroundImage: "url('/img/Opening.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor: PRIMARY_COLOR}}>
      <div className="w-full h-screen flex justify-center items-center">
        <img src='img/logo.png' />
      </div>
    </div>
  )
}

export default SplashSection