import {useState, useEffect} from 'react';
import BlogList from './BlogList';

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
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const deleteMe = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect');
    })
    
    return (
        <div className='home'>
            <BlogList blogs={blogs} title={'All blogs'} deleteMe={deleteMe}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" deleteMe={deleteMe}/> */}
        </div>
    );
}
 
export default Home;