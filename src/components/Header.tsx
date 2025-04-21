import { createPortal } from "react-dom";

export default function Header(){

    return createPortal(
        <header className="bg-[#862a9b] rounded-full border-2 border-[#0d0410] shadow-2xl 
                p-3 mt-2 z-[999999] left-1/2 w-fit -translate-x-1/2 elemento-scrollDown">
            <ul className="flex flex-row gap-4 font-bold">
                <a href="#Projects" className="hover:text-blue-500 target:text-blue-500 transition-colors duration-200">Proyectos</a>
                <a href="#Techs" className="hover:text-blue-500 target:text-blue-500 transition-colors duration-200">Tecnologías</a>
                <a href="#Contact" className="hover:text-blue-500 target:text-blue-500 transition-colors duration-200">Contacto</a>
            </ul>
        </header>,
        document.body
    )
}