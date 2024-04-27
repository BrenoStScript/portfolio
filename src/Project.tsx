import logoRoxo from './assets/Logo.png'
import vaccineCard from './assets/vaccine-card.jpg'
import toDoList from './assets/to-do-list.jpg'
import digitalBible from './assets/digital-bible.jpg'
import './Projects.css'


function Project(){
    return(
        <div className="projects">
            <div className='project'>
                <div className='project-content'>
                    <h1>Vaccine-Card</h1>
                    <p>Project made with JavaScript.<br/> Based on the brazilian child vaccination callendar, input a birthdate and get to now the status of the child on the callendar.</p>
                    <a href='https://vaccine-card.vercel.app/' target='blank'>
                        <img src={vaccineCard}/>
                    </a>
                </div>
            </div>
            <div className='project react'>
                <div className='project-content'>
                    <h1>To-do List</h1>
                    <p>Project made with React<br/>To-do List application wich uses Local Storage</p>
                    <a href='https://to-do-list-seven-black.vercel.app/' target='blank' > 
                        <img src={toDoList}/>
                    </a>
                </div>
            </div>
            <div className='project react'>
                <div className='project-content'>
                    <h1>Digital Bible</h1>
                    <p>Project made with TS + Tailwind + Axios<br/>Application that fetchs data from an API and provides Verses from different versions of the Bible</p>
                    <a href='https://digital-bible-one.vercel.app/' target='blank'>
                      <img src={digitalBible}/>
                    </a>
                </div>
            </div>
            <div className='project last'>
                <div className='project-content'>
                    <h1>More Projects</h1>
                    <p>If you want to know my better<br/> There'll be more projects right here.</p>
                    <a>
                        <img src={logoRoxo}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
