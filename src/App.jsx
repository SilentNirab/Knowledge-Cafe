import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handelAddToBookmarkes = blog => {
    const newBookmarkes = [...bookmarks, blog];
    setBookmarks(newBookmarkes);
  }

  return (
    <>
     <Header></Header>
     <div className='flex max-w-6xl mx-auto'>
        <Blogs handelAddToBookmarkes={handelAddToBookmarkes}></Blogs> 
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App
