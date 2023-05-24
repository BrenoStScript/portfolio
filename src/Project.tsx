import logoRoxo from './assets/Logo.png'
import './Projects.css'


function Project(){
    return(
        <div className="projects">
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