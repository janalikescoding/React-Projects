//import {useState, useEffect} from 'react';
import BlogList from './blogs/BlogList';
import useFetch from './useFetch';

// const Home = () => {
// // const clickMe = (e) => {
// //     console.log('Hello ninjas');
// //     console.log('Hello again ninjas', e);
// // }

// // const clickMeAgain = (name, e) => {
// //     console.log('Hello ' + name);
// //     console.log('We meet again, ' + name, e);
// // }

// const [name, setName] = useState('Mario');
// const [age, setAge] = useState(25);

// const handleClick = () => {
//     setName('Luigi');
//     setAge(30);
// }

//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             {/* <button onClick={(e) => {clickMeAgain('Mario', e)}}>Click me again</button> */}
//             <p>{name} is {age} years old.</p>
//         </div>
//      );
// }

const Home = () =>{
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);
    // const deleteMe = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    //const [name, setName] = useState('Mario');
    const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs'); //Notice how the data fetched is assigned to blogs in the right => direction.
    
    
    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {pending && <div>Loading ...</div>} {/* Thought: Maybe also !blogs && .. */}
            {blogs && <BlogList blogs={blogs} title={'All blogs'}/>} {/* Do a null check to make sure the blogs have loaded from the DS before displaying them */} {/* deleteMe={deleteMe} */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" deleteMe={deleteMe}/> */}
            {/* <button onClick={() => {setName('Luigi')}}>Click Me</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}
 
export default Home;