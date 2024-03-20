import { NavBar } from "./components/shared/navbar";
import { Provider } from "./provider";
import { Router } from "./routes/";

function App() {
  return (
    <Provider>
      <NavBar />
      <Router />
    </Provider>
  );
}

export default App;
