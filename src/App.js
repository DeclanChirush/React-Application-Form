import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Registration from "./component/registrationForm";
function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Registration}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
