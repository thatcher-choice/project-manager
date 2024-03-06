export default function Button({children, ...props}){
    return  <button className="mt-10 h-10 w-5/12 rounded-full bg-slate-700 flex justify-center items-center text-slate-300 px-0.5 py-0.5	" {...props}>
                    {children}
                </button>
}