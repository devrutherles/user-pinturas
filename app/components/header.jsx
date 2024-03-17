"use client";
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { account } from "../appwrite";
import { useState , useContext } from "react";
import { AuthContext } from "../hooks/authContext";
import Link from "next/link";
const navigation = [
  { name: "Contratar ", href: "/contratar", current: true },
  { name: "Meus serviços", href: "/perfil", current: false },
  { name: "Perfil", href: "/perfil", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const {session,menageSession, role, manageRole} = useContext(AuthContext)
  const [select,setSelect] = useState('Inicio')
const path = usePathname()
  const logout = async () => {
    const user = await account.deleteSession("current");
    menageSession(null);
    router.push('/')
  };

  const getUser = async () => {
    const user =  account.getSession("current");
    user.then(function (response) {
      menageSession(response);
  }, function (error) {
      console.error(error); // Failure
  });
   
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-[#fcfcfc] border-b-[#e2e2e2] border-b-[1px]"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                <Link href="/" className="flex w-auto h-auto cursor-pointer">
                  <img
                    alt=""
                    className="h-8"
                    src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f6d755ee28f3aeadf2/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  />
                </Link>
                <div className="hidden sm:ml-6 sm:block">
                  <div
                    className={classNames(
                      session ? "flex" : "hidden",
                      "  space-x-4"
                    )}
                  >
                    {navigation.map((item) => (
                      <Link
                      key={item.name}
                      onClick={()=>setSelect(item.name)}
                        href={item.href}
                        className={classNames(
                          item.name == select
                          ? " text-[#404040]   "
                          : "text-[#898989]  hover:text-[#404040]",
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>


                <div className={classNames(session ? 'md:!hidden' : "md:flex",    path == '/login' || path == '/cadastro' ? 'md:!hidden' :'md:flex'
, "hidden  md:-ml-1/2 md:absolute md:left-0 md:top-5  md:w-full md:justify-center md:gap-4")}>
                <Disclosure.Button
                  as="button"
                 onClick={()=>manageRole('client')}
                  className={classNames(
                    role == "client"
                      ? " text-[#fff] bg-[#5746af]  "
                      : "text-[#898989]  hover:text-[#5746af]",
                    "block rounded-[10px] text-center px-2 py-1 text-base font-medium  "
                  )}
                >
                  Quero contratar 
                </Disclosure.Button>
                <Disclosure.Button
                  as="button"
                 onClick={()=>manageRole('worker')}
                  className={classNames(
                    role == "worker"
                      ? " text-[#fff] bg-[#5746af]  "
                      : "text-[#898989]  hover:text-[#5746af]",
                    "block rounded-[10px] text-center px-2 py-1 text-base font-medium "
                  )}
                >
                  Quero trabalhar
                </Disclosure.Button>
              </div>
              </div>

              {session ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             

             <button
             onClick={()=> logout()}
                  
                  className="ml-6 inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
                >
                  Sair
                </button>
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="ml-6 inline-flex items-center rounded-md bg-[#5746af] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#7a6cc2]"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-4 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
? " text-[#404040]   "
: "text-[#898989]  hover:text-[#404040]",

session ? 'flex' : 'hidden',
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <div className={classNames( session ? '!hidden' : 'flex',  " justify-center !mt-8 gap-2 w-full items-center")}>
                <Disclosure.Button
                  as="button"
                 onClick={()=>manageRole('client')}
                  className={classNames(
                    role == "client"
                      ? " text-[#fff] bg-[#5746af]  "
                      : "text-[#898989]  hover:text-[#5746af]",
                    "block rounded-[24px] text-center px-4 py-3 text-base font-medium w-1/2 "
                  )}
                >
                  Quero contratar
                </Disclosure.Button>
                <Disclosure.Button
                  as="button"
                 onClick={()=>manageRole('worker')}
                  className={classNames(
                    role == "worker"
                      ? " text-[#fff] bg-[#5746af]  "
                      : "text-[#898989]  hover:text-[#5746af]",
                    "block rounded-[24px] text-center px-4 py-3 text-base font-medium w-1/2"
                  )}
                >
                  Quero trabalhar
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
