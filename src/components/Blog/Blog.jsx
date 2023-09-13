import {FcBookmark} from 'react-icons/fc';
import PropTypes from 'prop-types';


    const Blog = ({blog, handelAddToBookmarkes}) => {
    const {title, cover,author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='py-6 border-b-2 space-y-2'>
            <img className='rounded-md md:w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16 my-4 mr-4' src={author_img} alt="" />
                    <div className='my-4'>
                        <h3 className='text-lg font-bold'>{author}</h3>
                        <p className='text-sm text-gray-500 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                <span className='text-sm text-gray-400 font-semibold'>{reading_time} min read</span>
                <button onClick={() => handelAddToBookmarkes(blog)}><FcBookmark></FcBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className=''>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href='' className='pr-2 text-sm text-gray-400 font-semibold'>#{hash}</a></span>)
                }
            </p>
            <button className=' text-purple-800 underline font-semibold'>mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelAddToBookmarkes: PropTypes.func.isRequired,
}

export default Blog;