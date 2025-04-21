export default function Footer() {

    return(
        <footer className="bg-gray-800 w-full h-fit">
            <div className="w-full md:grid md:grid-cols-2 place-self-center py-2">
                <div className="p-5">
                    <a href="">
                        <label className="text-3xl font-bold">Xilef Torres</label>
                        <p className="text-xl">Ingeniero de software</p>
                    </a>

                    <div className="grid grid-cols-1 gap-1 my-5">
                        <h2 className="font-bold">Sobre mi</h2>
                        <p>Hola, soy Jorge Xilef Jacobo Torres, estudiante de la Licenciatura en Ingeniería de Software y programador de tiempo completo. Dedico gran parte de mi día a escribir código, simplemente porque me apasiona.</p>
                        <p>Me especializo en el desarrollo de videojuegos y páginas web, dos áreas que disfruto profundamente. Mi objetivo es convertirme en un creador de videojuegos, diseñando experiencias que reflejen mi estilo y visión.</p>
                    </div>
                    <div>
                        <h2 className="font-bold">Habilidades</h2>
                        <ul className="md:grid md:grid-cols-3 grid grid-cols-2 gap-4 list-disc pl-5">
                            <li>Trabajo en equipo</li>
                            <li>Resolucion de problemas</li>
                            <li>Autodidacta</li>
                            <li>Adaptabilidad</li>
                            <li>Comunicacion efectiva</li>
                            <li>Compromiso y responsabilidad</li>
                        </ul>
                    </div>
                </div>
                <div id="Contact" className="p-5 w-full">
                    <h1 className="font-bold text-3xl text-center mb-5">Contacta conmigo</h1>
                    <div className="bg-white md:w-6/8 w-7/8 h-95 rounded-xl text-black p-5 place-self-center">
                        <form action="https://formsubmit.co/9512429e5836f5cceb65d51ce3b20ad1" className="grid grid-cols-1 gap-2" method="post"><input type="hidden" name="form-name" value="form 1"/>
                            <div className="grid grid-cols-1 gap-2">
                                <label className="contact__form-label" htmlFor="name">Nombre</label>
                                <input className="bg-gray-300 p-2 rounded-xl" required placeholder="Ingrese su nombre" type="text" name="name" id="name"/>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label className="contact__form-label" htmlFor="email">Email</label>
                                <input className="bg-gray-300 p-2 rounded-xl" required placeholder="x@mail.com" type="email" name="email" id="email"/>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <label className="contact__form-label" htmlFor="message">Mensaje</label>
                                <textarea className="bg-gray-300 p-2 rounded-xl" required cols={30} rows={3} placeholder="Hola, me gustaria contactar con usted para cotizar una pagina web de mi empresa X" name="message" id="message"></textarea>
                            </div>
                            <button className="bg-gray-600 text-white rounded-xl w-fit p-3 place-self-end hover:[animation:soft-bounce_0.6s_infinite]" type="submit">
                            Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}