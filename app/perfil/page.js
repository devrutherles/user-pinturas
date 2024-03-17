"use client";
import { useEffect, useState } from "react";
import { Dialog, Switch } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CardServicos from "../components/cardServicos";
import { Query } from "appwrite";
import { databases } from "../appwrite";
import Vazio from "../components/vazio";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Invoices", href: "#" },
  { name: "Clients", href: "#" },
  { name: "Expenses", href: "#" },
];
const secondaryNavigation = [
  { name: "Perfil", href: "#perfil", icon: UserCircleIcon, current: true },

  { name: "Serviços", href: "#servicos", icon: CreditCardIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [current, setCurrent] = useState("Perfil");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [nome, setNome] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    console.log(user)
    let promise = databases.listDocuments("pintura", "servicos", [
      Query.equal('user_id', user?.$id),
    ]);

    const getServicos = () => {
      promise.then(
        function (response) {
          console.log(response);
          setServicos(response.documents);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    getServicos();
  }, []);


  return (
    <>
      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
          <nav className="flex-none px-4 sm:px-6 lg:px-0">
            <ul
              role="list"
              className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col"
            >
              {secondaryNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.name == current
                        ? "bg-gray-50 text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                      "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.name == current
                          ? "text-indigo-600"
                          : "text-gray-400 group-hover:text-indigo-600",
                        "h-6 w-6 shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div>
              <h2
                id="perfil"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Perfil
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
              Atualize e confira seus dados e serviços
              </p>

              <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Nome
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      defaultValue={user?.name}
                      className="block w-full rounded-md border-1  bg-white/5 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-gray-500 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Atualizar
                    </button>
                  </dd>
                </div>
                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Email
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <input
                      type="email"
                      defaultValue={user?.email}
                      value={user?.email}
                      disabled
                      className="block w-full rounded-md border-1  bg-white/5 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-gray-500 sm:text-sm sm:leading-6"
                    />
                  </dd>
                </div>

                <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Telefone
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      defaultValue={user?.name}
                      className="block w-full rounded-md border-1  bg-white/5 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 ring-gray-500 sm:text-sm sm:leading-6"
                    />
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Atualizar
                    </button>
                  </dd>
                </div>
        <div className="pt-6 sm:flex">
                  <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
                    Endereço
                  </dt>
                  <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                    <div className="text-gray-900"></div>
                    <button
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Atualizar
                    </button>
                  </dd>
                </div>
              </dl>
            </div>

            <div id="servicos" className="my-3">
              <h2 className="text-base my-5 font-semibold leading-7 text-gray-900">
                Seus serviços
              </h2>
         
              {servicos?.length > 0 ? 
              
              <CardServicos servico={servicos} />
              
               : <Vazio />}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
