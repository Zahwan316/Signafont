import { useEffect, useState, type EventHandler, type ReactEventHandler } from "react";
import { BisindoIcon } from "../../../component/icon";
import FormInput from "../../../component/input";
import useFormStore from "../../../state/form";

const formInput = [
  {
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  }
]
const RegisterSectionComponent = (props: any) => {
  const formdata = useFormStore((state) => state.userdata)
  const setFormData = useFormStore((state) => state.setUserData)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formdata, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    console.log(formdata)
  }, [formdata])

  return(
    <div className="w-full h-full">
      <div>
        {
          formInput.map((item, index) => (
            <FormInput placeholder={item.placeholder} type={item.type} name={item.name} key={index} onInput={(e) => handleInput(e)}/>
          ))
        }
      </div>
      <div className='w-full h-[clamp(200px,30vh,400px)] flex flex-row justify-center items-center'>
        <BisindoIcon />
      </div>
    </div>
  )
}

export default RegisterSectionComponent;