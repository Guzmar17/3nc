export default function Component() {
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
  
  
  