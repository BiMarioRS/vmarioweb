import "./App.css";
import Content from "./Fairlaunch/Content/Content";
import useLocalStorage from "use-local-storage";
import Toggle from "./Fairlaunch/components/Toggle/Toggle";

function App() {
  const defaultDark = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "light" : "dark"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <body>
      <div className="App" data-theme={theme}>
        <div>
          <div className="toggle" onClick={switchTheme}>
            {" "}
            <Toggle onClick={switchTheme}></Toggle>
          </div>
        </div>
        <Content />
      </div>
    </body>
  );
}

export default App;
