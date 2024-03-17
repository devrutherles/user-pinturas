export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container px-6 py-6 mt-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#">
              <img
                className="w-auto h-7"
                src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f6989c3835d327b838/view?project=65f63eb7a14355c1ee4e&mode=admin"
                alt=""
              />
            </a>
            <h2 className="mt-4 w-3/4 text-[12px] text-gray-600 ">
              Somos uma plataforma que conecta clientes e pintores com uma
              solução digital que facilita a busca e contratação de serviços de
              pintura.
            </h2>
          </div>
          <div>
            <p className="font-semibold text-gray-800 ">Sobre nós</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="/faq"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Perguntas frequentes
              </a>
              <a
                href="/termos"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Termos de uso
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 ">Ajuda</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="/contato"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Contato
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Cadastre-se
              </a>
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-500"
              >
                Entrar
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200  " />
        <div className="flex flex-wrap items-center -mb-4 md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-xs text-gray-600  py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="/"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                {"  "}
                PinteJá{"  "}
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                className="text-blueGray-500 hover:text-blueGray-800"
              ></a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
