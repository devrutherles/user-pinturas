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
    setIsloading(true);

    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  return (
    <div>
      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm leading-6 text-gray-700"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm leading-6">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <button
            onClick={register}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
             {isLoading ? (
              <>
                <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                <div class="ml-2">
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
