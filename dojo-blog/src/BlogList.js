// const BlogList = (props) => { //Can also decompose props as ({blogs, title}) to get the required fields, then the lines 2 and 3 will not be needed.
//     const blogs = props.blogs;

import { Link } from "react-router-dom";

//     const title = props.title;
const BlogList = ({blogs, title}) => { //Can also decompose props as ({blogs, title}) to get the required fields, then the lines 2 and 3 will not be needed.

    // {blogs, title, deleteMe}
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <Link to={`blogs/${blog.id}`}> {/* Template string {`blogs/${blog.id}`} used here instead of doing a {blogs/blog.id} will not work*/}
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        {/* <button onClick={() => {deleteMe(blog.id)}}>Delete Me</button> */}
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;