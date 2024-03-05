export default function Footer() {
  return (
      <footer className="w-full py-6 md:py-12 ">
        <div className="container flex flex-col items-center gap-4 px-4 md:px-6 md:flex-row md:justify-between lg:gap-6">
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:gap-1.5 w-60">
            <a className="flex items-center gap-2 text-2xl font-bold" href="#">
              <span>El Catire Hot Dogs</span>
            </a>
            <p className="text-sm tracking-wide/[-0.025]">
              © 2024 ElCatire. All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 md:order-3 md:gap-3">
            <div class="sm:w-80 flex mt-4 space-x-6 opacity-1 justify-center font-semibold items-center md:mt-0">
              <p>@elcatirehotdogs</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 md:order-2 md:gap-3">
            <div className="text-center font-caprica text-lg 
            hidden lg:block"
            >
              <p>El mejor perro caliente de la Ciudad🌭</p>
              {/*<p>El único que termina en una 🏔️ de queso amarillo 🧀</p>*/}
            </div>
          </div>
        </div>
      </footer>
  );
  //todo: cambiar redes socailes por las de la empresa
}
