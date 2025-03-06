import './App.css';
import Navbar from './Navbar';
import Home from './Home';

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
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
