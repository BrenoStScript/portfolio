import logoRoxo from './assets/Logo.png'
import vaccineCard from './assets/vaccine-card.jpg'
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
            <div className='project'>
                <div className='project-content'>
                    <h1>NextTale</h1>
                    <p>Project made with React + Vite.<br/> Consuming the IMDB API the site gives recomendations based on the last show you whatched  </p>
                    <a>
                        <img src={logoRoxo}/>
                    </a>
                </div>
            </div>
            <div className='project'>
                <div className='project-content'>
                    <h1>NextTale</h1>
                    <p>Project made with React + Vite.<br/> Consuming the IMDB API the site gives recomendations based on the last show you whatched  </p>
                    <a>
                        <img src={logoRoxo}/>
                    </a>
                </div>
            </div>
            <div className='project last'>
                <div className='project-content'>
                    <h1>NextTale</h1>
                    <p>Project made with React + Vite.<br/> Consuming the IMDB API the site gives recomendations based on the last show you whatched  </p>
                    <a>
                        <img src={logoRoxo}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project