import logo from './logo.svg';
import './App.css';
import HomeComponent from './component/home/HomeComponent'
import FilmComponent from './component/film/FilmComponent'
import SerieComponent from './component/serie/SerieComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
<Router>
  <Switch>
     <Route path="/films" component={FilmComponent}   />
     <Route path="/series" component={SerieComponent}   />
    <Route path="/" exact component={HomeComponent}   />
  </Switch>

</Router>
  );
}

export default App;
