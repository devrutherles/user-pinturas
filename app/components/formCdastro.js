import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../hooks/authContext";
import { account, ID } from "@/app/appwrite";

export default function FormCadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const { session, menageSession } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    name:''
  });
  
  const login = async (email, password) => {
    const promise = account.createEmailSession(email, password);

    promise.then(
      function (response) {
        console.log(response);
        menageSession(response);
        account.get().then(

            function (response) {
              localStorage.setItem("user", JSON.stringify(response));
            },
            function (error) {
              console.log(error); // Failure
            }
          );
    setIsloading(false);

        route.push("/contratar");
      },
      function (error) {
        console.log(error); // Failure
        setIsloading(false);

      }
    );
  };

  const register = async () => {
    setError({
      email:'',
      password:'',
      name:""
    })
    if (!email) {
      setError((prevError) => ({
        ...prevError,
        email: "Insira um e-mail válido",
      }));
    } 
    
    else if (!name) {
      setError((prevError) => ({
        ...prevError,
        name: "Insira um nome válido",
      })); }
    else if (!password) {
      setError((prevError) => ({
        ...prevError,
        password: "Insira uma senha válida",
      }));
    } 
     
    
    else {

    setIsloading(true);

    await account.create(ID.unique(), email, password, name);
    login(email, password);}
  };

  return (
    <div>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email 
          </label>
          <div className="mt-2">
          {error.email && <p className="text-red-600 text-[12px]">{error.email}</p>}

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 rounded-md border-0 py-1.5 focus-visible:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome completo
          </label>
          <div className="mt-2">
          {error.name && <p className="text-red-600 text-[12px]">{error.name}</p>}

            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full px-4 rounded-md border-0 py-1.5 focus-visible:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Senha
          </label>
          <div className="mt-2">
          {error.password && <p className="text-red-600 text-[12px]">{error.password}</p>}

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full px-4 rounded-md border-0 py-1.5 focus-visible:outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        

        <div>
          <button
            onClick={register}
            className="flex w-full justify-center rounded-md bg-[#5746af] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#8a7bd4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
             {isLoading ? (
              <>
                <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                <div className="ml-2">
                  {" "}
                  Carregando... <div></div>
                </div>
              </>
            ) : (
              "Cadastre-se"
            )}
    
          </button>
        </div>
      </div>
    </div>
  );
}
