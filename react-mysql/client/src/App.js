import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {

  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link
            onClick={() => { window.location.href = "/" }}
            to="/">
            Homepage
          </Link>
          <Link
            onClick={() => { window.location.href = "/createpost" }}
            to="/createpost">
            Create A Post
          </Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
