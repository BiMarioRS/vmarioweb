import "./App.css";
import Content from "./Fairlaunch/Content/Content";
import Toggle from "./Fairlaunch/components/Toggle/Toggle";
import { useState } from "react";

function App() {
  const defaultLight = "(prefers-color-scheme: light)"

  const [theme, setTheme] = useState(defaultLight ? "light" : "dark");

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
