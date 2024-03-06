import CreateProject from "./components/CreateProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [notes, setNotes] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  });

  function handleAddTask(task){
    console.log('hemloo')
    setNotes(prev => {
      const newTask = {
        text : task,
        projectId : prev.selectedProjectId,
        taskId: Math.random()
      };
      return {
        ...prev,
        tasks : [newTask, ...prev.tasks]
      }
    })
  } 

  function handleDeleteTask(id) {
    setNotes(prev => {
      return {
        ...prev,
        tasks : prev.tasks.filter((task) => task.taskId !== id )
      }
    })
  }

  function handleSelectProject(id) {
    setNotes(prev => {
      return {
        ...prev,
        selectedProjectId : id,
      }
    })
  }

  function handleStartAddProject() {
    setNotes(prev => {
      return {
        ...prev,
        selectedProjectId : null,
      }
    })
  }
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random()
    };
    setNotes(prev => {
      return {
        ...prev,
        selectedProjectId : undefined,
        projects: [...prev.projects,newProject]
      }
    })
  }

  function handleCancelAddProject() {
    setNotes(prev => {
      return {
        ...prev,
        selectedProjectId : undefined,
      }
    })
  }
  function handleDeleteProject() {
    setNotes(prev => {
      return {
        ...prev,
        selectedProjectId : undefined,
        projects: prev.projects.filter((project) => project.id != prev.selectedProjectId )
      }
    })
  }
  const selectedProject = notes.projects.find(project => project.id === notes.selectedProjectId)
  let content = <SelectedProject tasks={notes.tasks} addTask={handleAddTask} deleteTask={handleDeleteTask} onDelete={handleDeleteProject} project={selectedProject}/>;
  if(notes.selectedProjectId === null){
    content = <CreateProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if(notes.selectedProjectId === undefined){
    content = <NoProject onStartAddProject={handleStartAddProject}/>

  }
  return (  
    <main className="h-screen my-8 flex gap-8">
      <Sidebar selectedProjectId={notes.selectedProjectId} onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={notes.projects}/>
      {content}
    </main>
  );
}

export default App;
