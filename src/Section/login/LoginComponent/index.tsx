import { type ReactNode } from 'react';
import SosmedButton from '../../../component/button/sosmed';
import FormInput from '../../../component/input';
import { NEUTRAL_COLOR } from '../../../constant/color';
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../../component/icon';
import useFormStore from '../../../state/form';

type icon = {
  name: string,
  icon: ReactNode
}

const LoginSectionComponent = () => {
  const formdata = useFormStore((state) => state.userdata)
  const setFormData = useFormStore((state) => state.setUserData)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formdata, [e.target.name]: e.target.value})
  }

  const iconButton: Array<icon> = [
    {
      name: 'Google',
      icon: <GoogleIcon />
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon />
    },
    {
      name: 'Apple',
      icon: <AppleIcon/>
    },
  ]
  return (
    <>
      <div className='mb-12'>
        <FormInput placeholder='Email' type='email' name='email' onInput={(e) => handleInput(e)}/>
        <FormInput placeholder='Password' type='password' name='password' onInput={(e) => handleInput(e)}/>
      </div>
      <div className='flex flex-row justify-center items-center mb-12'>
        <div
          className='w-full border h-0'
          style={{ borderColor: NEUTRAL_COLOR }}
        ></div>
        <div className='bg-white px-6 absolute'>
          <span className=''>Or</span>
        </div>
      </div>
      <div>
        {iconButton.map((item, index) => (
          <SosmedButton key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </>
  );
};

export default LoginSectionComponent;
