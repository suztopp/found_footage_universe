import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import AlphabeticalMovies from './components/AlphabeticalMovies';
import SingleMovie from './components/SingleMovie';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/alphabetical-list" exact component={AlphabeticalMovies} />
          <Route path="/single-movie" exact component={SingleMovie} />
          {/* This is to come */}
          {/* <Route path="/links" exact component={Links} />  */}

          <Route render={() => <h1>404 PAGE NOT FOUND</h1>} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
