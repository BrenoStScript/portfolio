import gitHubBlue from './assets/Slice 2.png'
import linkedInBlue from './assets/linked-in-blue.png'
import curriculumBlue from './assets/Slice 1.png' 
import resume from './assets/resume.jpg'
import './SideBar.css'
import { useRef } from 'react'

function SideBar(){

    const modal = useRef<HTMLDialogElement>(null);

    const openModal = () =>{
        if(!modal.current){
            return;
        }
        modal.current.showModal()
    }

    const closeModal =()=>{
        if(!modal.current){
            return;
        }
        modal.current.close()
    }

    return(
        <div className='sidebar'>
            <a href='https://github.com/BrenoStScript' target='blank' className='fig'>
                <img src={gitHubBlue}/>
            </a>
            <a href='https://www.linkedin.com/in/breno-santos-stscript/' target='blank' className='fig'>
                <img src={linkedInBlue} />
            </a>
            <div onClick={openModal} className='fig cv'>
                <img src={curriculumBlue} />
            </div>

            <dialog ref={modal}>
                <img src={resume} />
                <button onClick={closeModal} > CLOSE </button>
            </dialog>
        </div>
    )
}

export default SideBar