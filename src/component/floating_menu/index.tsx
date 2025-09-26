import { useNavigate } from "react-router-dom";
import { AchievmentIcon, FlashCardIcon, GameIcon, HomeIcon, PengenalanIcon, SettingIcon } from "../icon";
import FloatingMenuItemComponent from "./item";

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
      name: 'FlashCard',
      url: 'flashcard',
      icon: <FlashCardIcon />
    },
    {
      name: 'Game',
      url: 'game',
      icon: <GameIcon />
    },
    {
      name: 'Settings',
      url: 'settings',
      icon: <SettingIcon />
    }
  ];

  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate('/' + url);
  }

  return (
    <div className="sticky bottom-4 sm:bottom-6 w-full h-[8vh] sm:h-[10vh] z-10 px-2 sm:px-4 md:px-6 flex flex-row justify-center">
      <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 w-full max-w-md sm:max-w-lg md:max-w-xl justify-center">
        {Menu.map((item, index) => (
          <div key={index} className="flex-1 max-w-[60px] sm:max-w-[70px] md:max-w-[80px]">
            <FloatingMenuItemComponent
              img={item.icon}
              onClick={() => handleNavigate(item.url)}
              url={"/" + item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FloatingMenuComponent;