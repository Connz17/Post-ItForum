import Footer from '../../components/Footer/Footer'
import NavBar from '../../containers/NavBar/NavBar'
import PostContainer from '../../containers/PostContainer/PostContainer'
import Sidebar from '../../containers/Sidebar/Sidebar'
import SignInContainer from '../../containers/SignInContainer/SignInContainer'


function NewPage() {
    return(
        <div className='grid-container'>
            <NavBar/>
            <SignInContainer/>
            <Sidebar/>
            <h1>New Topics! &#128240;</h1>
            <Footer/>
        </div>
    )
}

export default NewPage;