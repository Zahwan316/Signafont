import { BisindoIcon } from "../../../component/icon";
import FormInput from "../../../component/input";

const RegisterSectionComponent = () => {
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

  return(
    <div className="w-full h-full">
      <div>
        {
          formInput.map((item, index) => (
            <FormInput placeholder={item.placeholder} type={item.type} name={item.name} key={index} />
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