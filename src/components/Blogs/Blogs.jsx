import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelAddToBookmarkes} ) => {
    const [blogs, setBlogs] = useState([]);
     useEffect(() =>{ 
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                blog={blog}
                handelAddToBookmarkes={handelAddToBookmarkes}
                ></Blog> )
            }
        </div>
    );
};
Blogs.propTypes = {
    handelAddToBookmarkes: PropTypes.func.isRequired,
}
export default Blogs;