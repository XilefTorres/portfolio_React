import { ProjectsData } from "../db/projectsData"

export default function Projects() {

    return(
        <div id="Projects" className="place-self-center text-center mb-30 scroll-m-20">
            <h1 className="font-bold text-3xl">Proyectos</h1>
            <div className="p-4 md:grid md:grid-cols-3 grid grid-cols-1 gap-8">
                {ProjectsData.map((i, index) => (
                    <div key={index} className="bg-[#862a9b] size-fit rounded-xl overflow-hidden">
                        <h2 className="p-2">{i.name}</h2>
                        <a href={i.link}>
                            <img className="h-40 w-full mask-fade
                                transition-transform hover:scale-110" src={i.image}/>
                        </a>
                        <p className="max-w-77 p-2">{i.description}</p>
                        <div className="flex flex-row gap-2 w-full p-2">
                            <a href={i.link}>
                                <img className="size-7" src='src/assets/Logos/web.png'/>
                            </a>
                            {i.source !== "" &&
                            <a href={i.link}>
                                <img className="size-7" src='src/assets/Logos/code.png'/>
                            </a>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}