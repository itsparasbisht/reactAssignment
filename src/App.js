import './App.css';
import Posts from './Posts';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SinglePost from './SinglePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Posts />
          </Route>

          <Route exact path="/singlePost/:id">
            <SinglePost />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
