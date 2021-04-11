import logo from './logo.svg';
import './App.css';
import About from "./portfolio/about.js";
import Introduction from "./portfolio/introduction.js";
import Sidebar from "./portfolio/sidenav.js";
import Timeline from "./portfolio/progression.js"
import Projects from './portfolio/project.js';
function App() {
  return (
    <div className="App">
       <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Projects></Projects>
					<Timeline></Timeline>
          </div>
      	</div>
      </div>
    </div>
  );
}

export default App;
