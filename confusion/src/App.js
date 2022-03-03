import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponent";
import {ConfigureStore} from "./redux/configureStore"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
