import { PRIMARY_COLOR } from "../../constant/color";
import ButtonComponent from "../../component/button";
import RegisterSectionComponent from "./RegisterComponent";
import RoundedProgress from "../../component/rounded_progress";
import { useState } from "react";
import LoginSectionComponent from "./LoginComponent";

const LoginSection = () => {
  const textStyle = "font-bold text-[24px]";
  const [menu, setMenu] = useState<string>("Login");

  const handleMenu = (id: string) => {
    setMenu(id);
  }

  return(
    <div className='w-full min-h-full p-6 pt-12 flex flex-col justify-between border' style={{minHeight: '100vh'}}>
      {/* Title */}
      <div className='w-full h-16 flex flex-row gap-4'>
        <div>
          <p className={`${textStyle} ${menu === 'Login' && 'border-b-3'}`} style={{ color: PRIMARY_COLOR }} onClick={() => handleMenu('Login')}>Login</p>
        </div>
        <div>
          <p className={`${textStyle} ${menu === 'Register' && 'border-b-3'}`} style={{ color: PRIMARY_COLOR }} onClick={() => handleMenu('Register')}>Register</p>
        </div>
      </div>

      {/* Main */}
      <div className="h-[70vh] mb-4">
        {
          menu == 'Login' ? <LoginSectionComponent /> : <RegisterSectionComponent />
        }      
      </div>

      {/* Button */}
      <div>
        <RoundedProgress />
        <ButtonComponent
          title={menu == 'Login' ? 'Login' : 'Sign Up'}
        />
      </div>
    </div>
  )
}

export default LoginSection;