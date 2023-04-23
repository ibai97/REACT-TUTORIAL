import logo from "./logo.svg";
import "./App.css";
import ComponenteA from "./components/pure/greeting";
import ComponenteAF from "./components/pure/greetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA name="Ibai" surname="Olagüe" />
        {/* Le pasamos un nombre a componenteA como si fuera un atributo de html y lo recoje el componente componenteA en las props  */}
        <ComponenteAF name={"Sabino"} />
      </header>
    </div>
  );
}

export default App;
