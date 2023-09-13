
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='w-1/3 bg-gray-300 ml-4 mt-6 p-4 rounded-md'>
            <div className="">
            <h2>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark 
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;