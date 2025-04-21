import { ProjectsData } from "../db/projectsData"

export default function Projects() {

    return(
        <div id="Projects" className="place-self-center text-center mb-30 scroll-m-20">
            <h1 className="font-bold text-3xl">Proyectos</h1>
            <div className="p-4 : md:grid md:grid-cols-2 grid grid-cols-1 gap-8">
                {ProjectsData.map((i, index) => (
                <div key={index} className="bg-[#862a9b] w-full max-w-sm rounded-xl overflow-hidden mx-auto">
                    <h2 className="p-2 text-white font-bold text-lg text-center">{i.name}</h2>
                  
                    <a href={i.link}>
                      <img
                        src={i.image}
                        className="h-40 w-full object-cover transition-transform hover:scale-110 mask-fade"
                        alt={i.name}
                      />
                    </a>
                  
                    <p className="p-2 text-white text-sm text-justify">{i.description}</p>
                  
                    <div className="flex flex-row gap-2 p-2">
                      <a href={i.link} className="">
                        <img className="size-7" src="/Logos/web.png" alt="Web" />
                      </a>
                      {i.source !== "" && (
                        <a href={i.source}>
                          <img className="size-7" src="/Logos/code.png" alt="Code" />
                        </a>
                      )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}