import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return <>
        <aside className=" mt-6 bg-slate-900 w-1/3 rounded-r-xl md:w-72 h-screen flex flex-col items-center justify-start">
            <h1 className="text-slate-50 text-2xl font-semi-bold mt-6">YOUR PROJECTS</h1>
            <Button onClick={onStartAddProject}>+ Add Project</Button>
            <ul className="w-full px-2">
                {projects.map(project => {
                    let cssClases = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    if(project.id === selectedProjectId){
                        cssClases += ' bg-stone-800 text-stone-200'
                    }else {
                        cssClases += ' text-stone-400'
                    }
                    return (<li key={project.id}>
                        <button className={cssClases} onClick={() => onSelectProject(project.id)}>{project.title}</button>
                    </li>
                    )
                })
                }

            </ul>
        </aside>
    </>
}