import { forwardRef } from "react"

const Input = forwardRef(function Input({textarea, label, type, ...props}, ref){
    return <p className="flex flex-col w-2/3">
    <label htmlFor="">{label}</label>
    {textarea ? <textarea ref={ref} className="bg-stone-200 px-2 py-1 rounded-sm border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600" {...props} type={type} name="" id="" /> :
     <input ref={ref} className="bg-stone-200 px-2 py-1 rounded-sm border-b-2 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600" {...props} type={type} name="" id="" />
}
</p>
})

export default Input;