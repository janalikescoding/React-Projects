import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [pending, setPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        setPending(true);
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-type": 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setPending(false);
            //history.go(-1); go back a page
            history.push('/');
        })
    }
    return ( 
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form
                onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!pending && <button>Add blog</button>}
                {pending && <button disabled>Adding blog...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>     */}
            </form>
        </div>
     );
}
 
export default Create;