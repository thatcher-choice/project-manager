import logo from '../../public/logo.png'
import Button from './Button'
export default function NoProject({onStartAddProject}){
    return <div className='w-2/3 flex items-center flex-col justify-center gap-6"'>
        <img className='w-16' src={logo} alt="logo" />
        <h1 className='text-stone-500 text-3xl font-bold'>No Project Selected</h1>
        <p className='text-stone-400 bold'>Select a project or get started with a new one</p>
        <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
}