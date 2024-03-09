import { useState } from "react";
export default function Component() {
  const [navbar, setNavbar] = useState(false);
  return (
      <header className="flex items-center h-16 px-4 w-full md:px-6 lg:px-8 border-b gap-4" >
        <a className="hidden sm:flex" href="#">
          Catire Hot Dog
        </a>
        <nav className="flex-1 hidden w-full sm:flex justify-center shrink-0 text-sm font-medium lg:text-base xl:justify-end">
          <a className="mx-2" href="#">
            Inicio
          </a>
          <a className="mx-2" href="#">
            Menu
          </a>
          <a className="mx-2" href="#">
            Pedidos
          </a>
          <a className="mx-2" href="#">
            Ubicaciones
          </a>
          <a className="mx-2" href="#">
            Contacto
          </a>
        </nav>
        <div className="md:hidden block">
                <button
                  className="p-1 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <p>abierto </p>   
                  ) : (
                  <p >cerrado</p>

                  )}
                </button>
              </div>
              <div
            className={`flex-1 justify-self-center pb-1 mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="menu-nav items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white">
                <a href="/">Inicio</a>
              </li>
              <li className="text-white">
                <a href="/#projectArea">Proyectos</a>
              </li>
              <li className="text-white">
                <a href="/#aboutArea">Sobre mi</a>
              </li>
              <li className="text-white">
                <a href="/#certifiedArea">Certificados</a>
              </li>
              <li className="text-white hidden sm:flex">
                <a href="/#contactArea">Contacto</a>
              </li>
            </ul>
          </div>
        <div className="flex items-center justify-end w-full sm:w-auto">
          <form className="flex-1 flex items-center gap-2 sm:gap-4">
            <input className="max-w-sm w-full" placeholder="Ingresa tu correo" type="email" />
            <button type="submit">Registrarse</button>

          </form>
          <button variant="outline">Iniciar Sesión</button>
        </div>
      </header>
    )
  }
  
  
  