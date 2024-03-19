import { Provider } from "./provider";
import { Router } from "./routes/";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
