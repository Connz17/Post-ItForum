import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';


import HomePage from './pages/HomePage/HomePage';
import HotPage from './pages/HotPage/HotPage';
import NewPage from './pages/NewPage/NewPage';
import PromotedPage from './pages/PromotedPage/PromotedPage';
import TopPage from './pages/TopPage/TopPage';

function App() {
  const [blogData, setBlogData] = useState([])

const getBlogData = () => {
  fetch("http://127.0.0.1:5502/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.posts);
    setBlogData(data.posts);
  });
}
  console.log(blogData);

  useEffect(() =>{
    getBlogData();
  },[])




  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage blogData={blogData}/>}/>
        <Route path='/hot-page' element={<HotPage />}/>
        <Route path='/new-page' element={<NewPage />}/>
        <Route path='/top-page' element={<TopPage />}/>
        <Route path='/promoted-page' element={<PromotedPage />}/>
      </Routes>
    </div>
  );
}

export default App;
