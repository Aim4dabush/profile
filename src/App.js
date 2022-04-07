//Styles
import "./App.scss";

//Routes
import routes from "./Routes/routes";

//Components
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <img
          src={process.env.PUBLIC_URL + "/Lanikai_Beach.png"}
          alt="Lanikai Beach"
        />
      </div>

      <NavBar />
      {routes}
    </div>
  );
}

export default App;
