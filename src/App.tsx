
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import { router } from "./router";// 
import {RouterProvider} from "react-router-dom";
import LoadingComponent from "./components/loading/Loading";
import './App.css'
function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <LoadingComponent/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
