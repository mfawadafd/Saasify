import {icons} from 'lucide-react';
const Button = ({btn_Text, variant = 'primary', icon, iconPosition='right', className=''})=>{

  const VariantClasses = {
    primary: 'bg-purple-500 hover-bg-purple-700 text-white',
    secondary:'bg-white hover:bg-purple-50 text-purple-700 border border-purple-200'
  }
  
  return(
    <div className="flex items-center justify-center">
      <button className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold text-sm py-2 px-4 rounded-md cursor-pointer transition-colors ${VariantClasses[variant]} ${className}`}>

        {icon && iconPosition ==='left' && icon}
        <span>{btn_Text}</span>
        {icon && iconPosition ==='right' && icon}
      </button>
    </div>
  )
}
export default Button;
