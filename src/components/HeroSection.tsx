import { motion } from "motion/react"

export default function HeroSection(){

    return(
        <>
            <motion.div className="relative md:w-3/4 h-screen place-content-center mx-auto"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut"}}>
                <div className="flex flex-row items-center justify-center mb-8 gap-2">
                    <motion.img src="/mano_saludando.png" className="h-10"
                                initial={{rotate: -15}} animate={{rotate: 30}}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.7,
                                    ease: "easeInOut"
                                }}/>
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
                <div className="flex flex-row gap-5 justify-center md:justify-start mx-auto mt-4 md:w-155">
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

                <motion.img src='/Logos/arrow_down.webp' 
                    className='absolute bottom-20 left-1/2 -translate-x-1/2 size-10'
                    animate={{ translateY: 10 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 0.8,
                        ease: "easeInOut"
                    }}/>
            </motion.div>
        </>
    )
}