import gitHubBlue from './assets/Slice 2.png'
import linkedInBlue from './assets/linked-in-blue.png'
import curriculumBlue from './assets/Slice 1.png' 
import './SideBar.css'

function SideBar(){

    return(
        <div className='sidebar'>
            <div className='fig'>
                <img src={gitHubBlue}/>
            </div>
            <div className='fig'>
                <img src={linkedInBlue} />
            </div>
            <div className='fig cv'>
                <img src={curriculumBlue} />
            </div>
        </div>
    )
}

export default SideBar