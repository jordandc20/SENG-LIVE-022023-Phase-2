import Header from "./components/Header.js";
import ProjectForm from "./components/ProjectForm.js";
import ProjectList from "./components/ProjectList.js";


import projects from './projects';
function App() {
  return (
    <div className="App">
      <Header />

      <ProjectForm />
      <ProjectList projects={projects}/>
    </div>
  )
}

export default App;
 