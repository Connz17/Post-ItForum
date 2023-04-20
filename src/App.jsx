import { useEffect, useState } from 'react';
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import SignInContainer from './containers/SignInContainer/SignInContainer';
import HomePage from './pages/HomePage/HomePage';

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
      <HomePage blogData={blogData}/>
    </div>
  );
}

export default App;
