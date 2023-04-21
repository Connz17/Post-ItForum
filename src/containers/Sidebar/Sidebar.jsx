import React, { useState } from 'react'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopicBar from '../../components/TopicBar/TopicBar';
import * as BsIcons from 'react-icons/bs'
import "./Sidebar.scss";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    

  return (
   
    <div className={ showSidebar ? 'sidebar active' : "sidebar" }>
        <BsIcons.BsFillCaretRightSquareFill className={ showSidebar ? 'menuBtn active' : 'menuBtn'} onClick={toggleSidebar}/>
        <h3 className='sidebar__heading'>Welcome</h3>
        <DisplayPicture/>
        <h3 className='sidebar__heading'>Topics</h3>
        <TopicBar/>
        <SearchBar />
        <h3 className='help'>Help</h3>
    </div>
  )
}

export default Sidebar