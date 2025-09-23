import { useNavigate } from "react-router-dom"
import { AchievmentIcon, GameIcon, HomeIcon, PengenalanIcon, SettingIcon } from "../icon"
import FloatingMenuItemComponent from "./item"

const FloatingMenuComponent = () => {
  const Menu = [
    {
      name: 'Home',
      url: 'profile',
      icon: <HomeIcon />
    },
    {
      name: 'Pengenalan',
      url: 'pengenalan',
      icon: <PengenalanIcon />
    },
    {
      name: 'Game',
      url: 'game',
      icon: <GameIcon />
    },
    {
      name: 'Achievment',
      url: 'achievment',
      icon: <AchievmentIcon />
    },
    {
      name: 'Settings',
      url: 'settings',
      icon: <SettingIcon />
    }
  ]

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate('/' + url);
  }

  return(
    <div className="absolute bottom-6 w-full h-[10vh] z-10 p-6 flex flex-row gap-6">
      {
        Menu.map((item,index) => 
          <FloatingMenuItemComponent
            img={item.icon}
            key={index}
            onClick={() => handleNavigate(item.url)}
            url={"/" + item.url}
          />  
        )
      }
    </div>
  )
}

export default FloatingMenuComponent