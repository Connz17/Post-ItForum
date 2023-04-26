import Footer from '../../components/Footer/Footer'
import NavBar from '../../containers/NavBar/NavBar'
import PostContainer from '../../containers/PostContainer/PostContainer'
import Sidebar from '../../containers/Sidebar/Sidebar'
import SignInContainer from '../../containers/SignInContainer/SignInContainer'



function TopPage() {
    return(
        <div className='grid-container'>
            <NavBar/>
            <SignInContainer/>
            <Sidebar/>
            <h1>Top Posts &#127942;</h1>
            <Footer/>
        </div>
    )
}

export default TopPage;