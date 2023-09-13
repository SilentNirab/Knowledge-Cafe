import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h1 className='text-2xl font-samibold bg-lime-100 mt-1 p-2 rounded-md'>{title}</h1>
            
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;