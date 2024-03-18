import { useContext, useState } from "react";
import { account } from "../appwrite";
import { useRouter } from "next/navigation";
import { AuthContext } from "../hooks/authContext";
import Link from "next/link";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const { menageSession } = useContext(AuthContext);
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const login = async (email, password) => {
    if (!email) {
      setError((prevError) => ({
        ...prevError,
        email: "Insira um e-mail válido",
      }));
    } else if (!password) {
      setError((prevError) => ({
        ...prevError,
        password: "Insira uma senha válida",
      }));
    } else {
      const promise = account.createEmailSession(email, password);
      setIsloading(true);
      promise.then(
        function (response) {
          console.log(response);
          menageSession(response),
            account.get().then(
              function (response) {
                localStorage.setItem("user", JSON.stringify(response));
                setIsloading(false);
              },
              function (error) {
                console.log(error); // Failure
                setIsloading(false);
              }
            );

          route.push("/contratar");
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }
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
            {error.email && (
              <p className="text-red-600 text-[12px]">{error.email}</p>
            )}
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 rounded-md border-0 py-1.5  placeholder:text-gray-400  sm:text-sm sm:leading-6 focus-visible:outline-none"
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
            {error.password && (
              <p className="text-red-600 text-[12px]">{error.password}</p>
            )}

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="block w-full px-4 rounded-md border-0 py-1.5 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6 focus-visible:outline-none"
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
              Lembre de mim
            </label>
          </div>

          <div className="text-sm leading-6">
            <Link
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Esqueceu sua senha?{" "}
            </Link>
          </div>
        </div>

        <div>
          <button
            onClick={() => login(email, password)}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              "Entrar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
