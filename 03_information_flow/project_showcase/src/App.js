import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  
  // lifted isDarkMode from header into app ; the hook is here
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");



  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });


const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

const onSetSearch = (e) =>setSearchQuery(e.target.value);

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {/* passing isDarkMode as a prop b/c  lifter the declaration from header into pp */}
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList 
        projects={projects} 
        searchResults={searchResults} 
        onSetSearch={onSetSearch} />
    </div>
  );
};

export default App;
