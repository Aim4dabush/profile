//styles
import "./App.scss";

//router
import routes from "./Routes/routes";

//components
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <img
          src={process.env.PUBLIC_URL + "/images/Lanikai_Beach.png"}
          alt="Lanikai Beach"
        />
      </div>

      <NavBar />
      {routes}
    </div>
  );
}

export default App;
