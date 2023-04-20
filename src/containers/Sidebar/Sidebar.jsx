import React from 'react'
import DisplayPicture from '../../components/DisplayPicture/DisplayPicture';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopicBar from '../../components/TopicBar/TopicBar';
import "./Sidebar.scss";

const Sidebar = () => {


  return (
    <div className='sidebar'>
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