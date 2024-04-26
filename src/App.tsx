import SideBar from "./SideBar";
import "./App.css";
import NavBar from "./NavBar";
import logo from "./assets/logo-preto.png";
import Project from "./Project";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <div className="presentation">
          <img src={logo} />
          <h1>Front-end Developer</h1>
          <p>Portfolio website made with React + Vite </p>
        </div>

        <Project />
        <SideBar />
      </div>
    </>
  );
}

export default App;
