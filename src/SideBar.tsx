import gitHubBlue from './assets/Slice 2.png'
import linkedInBlue from './assets/linked-in-blue.png'
import curriculumBlue from './assets/Slice 1.png' 
import './SideBar.css'

function SideBar(){

    return(
        <div className='sidebar'>
            <a href='https://github.com/BrenoStScript' target='blank' className='fig'>
                <img src={gitHubBlue}/>
            </a>
            <a href='https://www.linkedin.com/in/breno-santos-stscript/' target='blank' className='fig'>
                <img src={linkedInBlue} />
            </a>
            <div className='fig cv'>
                <img src={curriculumBlue} />
            </div>
        </div>
    )
}

export default SideBar