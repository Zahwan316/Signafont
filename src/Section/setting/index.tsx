import FloatingMenuComponent from "../../component/floating_menu"
import { NEUTRAL_COLOR, PRIMARY_COLOR } from "../../constant/color"
import { useState } from "react"

const SettingSection = () => {
  const [volume, setVolume] = useState(50)
  const [vibration, setVibration] = useState(50)

  return (
    <div className="h-screen w-full" style={{ backgroundColor: PRIMARY_COLOR }}>
      <div className="p-6 w-full flex flex-row justify-center items-center h-[80vh]">
        <div className="w-full max-w-lg h-2/4 bg-white rounded-[45px] p-12 flex flex-col items-center relative">
          {/* Title */}
          <div
            style={{ backgroundColor: NEUTRAL_COLOR }}
            className="p-4 rounded-xl w-2/4 absolute -top-6"
          >
            <p
              className="text-center font-bold text-2xl"
              style={{ color: PRIMARY_COLOR }}
            >
              Pengaturan
            </p>
          </div>

          {/* Content */}
          <div
            className="w-full h-5/6 rounded-xl flex flex-col gap-6 p-6"
            style={{ backgroundColor: NEUTRAL_COLOR }}
          >
            {/* Suara */}
            <div>
              <p className="font-bold text-xl mb-2" style={{ color: PRIMARY_COLOR }}>
                Suara: {volume}%
              </p>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#FF9500] appearance-none bg-[#007BFF] h-2 rounded-lg
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:bg-[#FF9500] 
                [&::-webkit-slider-thumb]:rounded-none 
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4 
                [&::-moz-range-thumb]:h-4 
                [&::-moz-range-thumb]:bg-[#FF9500] 
                [&::-moz-range-thumb]:rounded-none 
                [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            {/* Getaran */}
            <div>
              <p className="font-bold text-xl mb-2" style={{ color: PRIMARY_COLOR }}>
                Getaran: {vibration}%
              </p>
              <input
                type="range"
                min="0"
                max="100"
                value={vibration}
                onChange={(e) => setVibration(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#ff9800] appearance-none bg-[#007BFF] h-2 rounded-lg
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-4 
                [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:bg-[#ff9800] 
                [&::-webkit-slider-thumb]:rounded-none 
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4 
                [&::-moz-range-thumb]:h-4 
                [&::-moz-range-thumb]:bg-[#ff9800] 
                [&::-moz-range-thumb]:rounded-none 
                [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-center text-white text-sm">©2025 | UPI Efun <br></br>
Amina Yusra | Fahmi Irawan | M. Attalah Rasikhah | M. Zahwan Sidqi</p>
      </div>
      <FloatingMenuComponent />
    </div>
  )
}

export default SettingSection
