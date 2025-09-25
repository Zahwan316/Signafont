import { NEUTRAL_COLOR } from "../../constant/color"

type props = {
  placeholder?: string,
  type?: string,
  name?: string,
  value?: string,
  onInput?: () => void,
}

const FormInput = (Props: props) => {
  return(
    <div className='flex flex-col mb-6'>
      <label className='font-medium mb-4'>{Props.placeholder}</label>
      <input
        type={Props.type} 
        name={Props.name} 
        value={Props.value}
        className='h-12 rounded-xl font-bold text-gray-600 p-3 text-sm'
        style={{backgroundColor: NEUTRAL_COLOR}}  
        onInput={Props.onInput}
      />
    </div>
  )
}

export default FormInput