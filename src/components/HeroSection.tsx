export default function HeroSection(){

    return(
        <>
            <div className=" md:w-3/4 h-screen place-content-center mx-auto elemento-fade">
                <div className="flex flex-row items-center justify-center mb-8 gap-2">
                    <img src="/mano_saludando.png" className="h-10 animate-rotate"/>
                    <h1 className="sm:text-3xl text-2xl font-bold">Hola, soy <strong>Xilef Torres</strong></h1>
                </div>
                <div className="place-items-center place-self-center 
                    md:flex md:flex-row grid grid-cols-1 gap-4">
                    <img className="size-50 rounded-2xl" src="/yo.webp"/>
                    <div className="text-justify">
                        <p className="w-100 px-5"><strong>Ingeniero de software</strong> que ama la programacion 🖥️. De Sinaloa, Mexico. 🇲🇽</p>
                        <p className="w-100 px-5">Especializado en el desarrollo de <strong>videojuegos</strong> 🎮 y <strong>front-end</strong> de paginas web 🛜</p>
                    </div>
                </div>
                <div className="flex flex-row gap-5 place-self-center mt-4 md:w-155">
                    <a className=" bg-[#27062f] border-2 rounded-4xl p-2 flex flex-row gap-2
                            transition-transform hover:scale-115" href="https://www.linkedin.com/in/jorge-xilef-jacobo-torres-4b0029332/">
                        <img className="size-6 place-self-center" 
                        src="Logos/linkedin.png"/>
                        <label>Linkedin</label>
                    </a>
                    <a className=" bg-[#27062f] border-2 rounded-4xl p-2 flex flex-row gap-2
                            transition-transform hover:scale-115" href="https://github.com/XilefTorres">
                        <img className="size-6 place-self-center" 
                        src="Logos/github_light.svg"/>
                        <label>GitHub</label>
                    </a>
                    <a className=" bg-[#27062f] border-2 rounded-4xl p-2 flex flex-row gap-2
                            transition-transform hover:scale-115" href="https://www.instagram.com/xilefgeto/">
                        <img className="size-6 place-self-center" 
                        src="Logos/instagram.svg"/>
                        <label>Instagram</label>
                    </a>
                </div>

                <img src='/Logos/arrow_down.webp' 
                    className='absolute bottom-4 left-1/2 -translate-x-1/2 mx-auto animate-bounce size-10'/>
            </div>
        </>
    )
}