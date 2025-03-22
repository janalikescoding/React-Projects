import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './blogs/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './blogs/BlogDetails';
import NotFound from './NotFound';
import TidBit from './tidbits/Tidbit';

// function App() {
//   const title = 'Welcome to the new blog';
//   const likes = 50;
//   //const person = {name: 'Travis', age : 27}
//   const numbers = [1,2,3,4,5];
//   const link = "https://www.google.com";
//   //const test = true;

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>Liked {likes} times</p>

//         {/* <p>{person}</p> */}
//         <p>{numbers}</p>
//         <p>{10}</p>
//         <p>{'Hello Ninjas'}</p>
//         <p>{Math.random() * 10}</p>

//         <a href={link}>Google Link</a> {/* Note that this is href={link} and not href="{link}" */}
//         <p>Test: {test}</p>
//       </div>
//     </div>
//   );
// }

function App(){
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch> {/* From version 6 and up, need to use <Routes> instead*/}
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
          <Route path='/fun'>
            <TidBit />
          </Route>
          <Route path='*'> {/* Catch any other route. Make sure to place it at the last case because placing it above will be an obstruction. */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
};

export default App;
