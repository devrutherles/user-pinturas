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
import Link from "next/link";
import CardServicos from "../components/cardServicos";
import { Query } from "appwrite";
import { avatars, databases } from "../appwrite";
import Vazio from "../components/vazio";
import moment from "moment";

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

const Profile = (
  nome, setNome,email,setEmail, telefone,setTelefone, endereco,setEndereco
) =>{
  return(
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
    <div>
     

      <dl className="mt-6 space-y-6 divide-y divide-gray-100 text-sm leading-6">
        <div className="p-3 sm:flex bg-white rounded-[22px]">
      

          <dd className="mt-1 flex border-b border-slate-100 justify-between gap-x-6 sm:mt-0 sm:flex-auto">
            <div className="w-full  flex flex-col">
          <label
      htmlFor="first-name"
      className="block text-sm font-semibold leading-6 text-gray-600"
    >
      Nome{" "}
    </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="block w-full rounded-md  mt-2   py-1.5 px-3 focus-visible:outline-none   sm:text-sm sm:leading-6"
            /></div>
            <button
              type="button"
              className="font-semibold self-end pb-2 text-indigo-600 hover:text-indigo-500"
            >
              Atualizar
            </button>
          </dd>
        </div>
         <div className="p-3 sm:flex bg-white rounded-[22px]">
         
         <dd className="mt-1 flex border-b border-slate-100 justify-between gap-x-6 sm:mt-0 sm:flex-auto">
          <div className="w-full  flex flex-col">
          <label
      htmlFor="first-name"
      className="block text-sm font-semibold leading-6 text-gray-600"
    >
      Email{" "}
    </label>
            <input
            
              type="email"
              value={email}
              disabled
              className="block w-full rounded-md  mt-2   py-1.5 px-3  focus-visible:outline-none bg-white sm:text-sm sm:leading-6"
            />
           
            </div> <button
              disabled
              type="button"
              className="font-semibold self-end pb-2 text-slate-300"
            >
              Atualizar
            </button>
          </dd>
        </div>

         <div className="p-3 sm:flex bg-white rounded-[22px]">
         
         <dd className="mt-1 flex border-b border-slate-100 justify-between gap-x-6 sm:mt-0 sm:flex-auto">

            <div className="w-full  flex flex-col">
          <label
      htmlFor="first-name"
      className="block text-sm font-semibold leading-6 text-gray-600"
    >
      Telefone{" "}
    </label>
            <input
            
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="block w-full rounded-md  mt-2  py-1.5 px-3  focus-visible:outline-none bg-white sm:text-sm sm:leading-6"
            /></div>
            <button
              type="button"
              className="font-semibold self-end pb-2 text-indigo-600 hover:text-indigo-500"
            >
              Atualizar
            </button>
          </dd>
        </div>
         <div className="p-3 sm:flex bg-white rounded-[22px]">
         
         <dd className="mt-1 flex border-b border-slate-100 justify-between gap-x-6 sm:mt-0 sm:flex-auto">
          <div className="w-full  flex flex-col">
          <label
      htmlFor="first-name"
      className="block text-sm font-semibold leading-6 text-gray-600"
    >
      Endereço{" "}
    </label><input
            
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            defaultValue={endereco}
            className="block w-full rounded-md  mt-2  py-1.5 px-3  focus-visible:outline-none bg-white sm:text-sm sm:leading-6"
          /></div>
            <button
              type="button"
              className="font-semibold self-end pb-2 text-indigo-600 hover:text-indigo-500"
            >
              Atualizar
            </button>
          </dd>
        </div>
      </dl>
    </div>

  </div>
  )
}

const Senha = (password,setPassword
  
) =>{
  return(
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
    <div>
     

      <dl className="mt-6 space-y-6 divide-y divide-gray-100 text-sm leading-6">
       <div className="p-3 sm:flex bg-white rounded-[22px]">
      

        <dd className="mt-1 flex border-b border-slate-100 justify-between gap-x-6 sm:mt-0 sm:flex-auto">
            <div className="w-full  flex flex-col">
          <label
      htmlFor="first-name"
      className="block text-sm font-semibold leading-6 text-gray-600"
    >
      Senha atual{" "}
    </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              defaultValue={""}
              className="block w-full rounded-md  mt-2   py-1.5 px-3 focus-visible:outline-none  sm:text-sm sm:leading-6"
            /></div>
           
          </dd>
        </div>
       <div className="p-3 sm:flex bg-white rounded-[22px]">
         
        <dd className="mt-1 flex border-b border-slate-100 justify-between gap-x-6 sm:mt-0 sm:flex-auto">
          <div className="w-full  flex flex-col">
          <label
      htmlFor="first-name"
      className="block text-sm font-semibold leading-6 text-gray-600"
    >
      Nova senha{" "}
    </label>
            <input
            
              type="password"
              defaultValue={""}
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              className="block w-full rounded-md  mt-2   py-1.5 px-3  focus-visible:outline-none bg-white sm:text-sm sm:leading-6"
            />
           
            </div> <button
              disabled
              type="button"
              className="font-semibold self-end pb-2 text-slate-300"
            >
              Atualizar
            </button>
          </dd>
        </div>

      </dl>
    </div>

  </div>
  )
}


const List = ({servicos}) =>{
  moment.locale('pt')
  moment.updateLocale('pt')
    

  return(
    <div className="grid sm:grid-cols-1 max-md:mt-8 md:gap-2    md:grid-cols-2  lg:grid-cols-3
    ">
   {servicos?.map((client) => (
 <div key={client?.name} className="mb-6 sm:max-w-full md:max-w-[250px] items-center max-h-[200px] rounded-3xl bg-white p-4 hover:border-[#5746af] hover:border-[1px]">
      <div className="flex items-center justify-between border-b  pb-2 border-slate-100">
        <div className="flex items-center">
          <img className="mr-2 h-12 w-12 rounded-full object-cover" 
                        src={client?.servico != 'Pintura externa'?'https://cloud.appwrite.io/v1/storage/buckets/public/files/65f687cb6da92412c76a/view?project=65f63eb7a14355c1ee4e&mode=admin' : 'https://cloud.appwrite.io/v1/storage/buckets/public/files/65f687c00c4a9eeff4ef/view?project=65f63eb7a14355c1ee4e&mode=admin'}

          alt="profile" />
          <div>
            <h3 className="text-[16px] font-semibold text-gray-900">{client?.servico}</h3>
            <span className="text-[12px] font-medium block uppercase tracking-wide text-[#5746af]">
#{client?.$id}</span>
          </div>
        </div>
      </div>
  <div className="flex justify-between px-2 ">
  <div className=" py-3 text-center">
    <span className="text-[14px] font-medium block uppercase tracking-wide text-[#5746af]">
    {client?.m2} m²
    </span>
    <span className="text-[12px] text-gray-400">Área</span>
  </div>
  <div className=" py-3 text-center">
    <span className="text-[14px] font-medium block uppercase tracking-wide text-[#5746af]">
   {client?.comodos[0]}
    </span>
    <span className="text-[12px] text-gray-400">Comodos</span>
  </div>
  <div className="lg: py-3 text-center">
    <span className="text-[14px] font-medium block uppercase tracking-wide text-[#5746af]">
      R${client?.oferta && client?.oferta?.toFixed(2)}
    </span>
    <span className="text-[12px] text-gray-400">Sugerido</span>
  </div>
</div>



      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[14px] px-2 font-semibold text-green-500">
      <span className="text-[14px] font-medium block uppercase tracking-wide text-[#5746af]">
{client?.status}</span>
        <div>
       R${client?.valor && client?.valor?.toFixed(2)}
      </div>
      </div>
    </div>
 ))}
  </div>
  )
}

export default function Example() {
  const user =  JSON.parse(localStorage.getItem("user"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);

  const [current, setCurrent] = useState("Perfil");
 
  const [user,setUser]= useState({})
  

  const [nome, setNome] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const [servicos, setServicos] = useState([]);
  const [telefone, setTelefone ] = useState("")
  const [endereco,setEndereco] = useState("")
const [password, setPassword] = useState("")

  useEffect(() => {


    const userData = localStorage.getItem("user")
 if(userData){
    setUser(JSON.parse(userData))
    console.log(user)


    let promise = databases.listDocuments("pintura", "servicos", [
      Query.equal("user_id", user?.$id),
    ]);

    const getServicos = () => {
      promise.then(
        function (response) {
          setServicos(response.documents);
        },
        function (error) {
          console.log(error);
        }
      );
    };
  


    

 }
   

  }
    getServicos();
  }, []);
  const avatar  = ()=>{
    const promise = avatars.getInitials()
    return promise?.href
    }
  return (
    <>
      <div className="mx-auto  md:grid-cols-3 md:grid sm:flex sm:flex-col  max-w-7xl py-12  ">
        <aside className=" bg-white lg:w-[85%] rounded-[32px] sm:w-full    md:col-span-1 top-0 pb-3 px-8  flex flex-col   transition duration-300 lg:ml-0 ">
          <div>
           
            <div className="mt-8 text-center">
              <img
                src={avatar()}
                alt=""
                className="w-20 h-20 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              />
              <h5 className=" mt-4 text-xl font-semibold text-gray-600 lg:block">
                {user?.name}
              </h5>
              <span className=" text-gray-400 lg:block">{user?.email}</span>
            </div>
            <ul className="space-y-2 tracking-wide mt-8">
              <li>
              <button
                  onClick={()=> setCurrent("profile")}
                  className={classNames(current == "profile" ? "bg-[#5746af] !text-white" : "bg-white" ,"w-[100%] relative px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-600")}
                  target="_blank"
                >
                  <svg
                    className="-ml-1 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                      className="fill-current text-cyan-400 dark:fill-slate-600"
                    />
                    <path
                      d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                      className="fill-current text-cyan-200 group-hover:text-cyan-300"
                    />
                    <path
                      d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                      className="fill-current group-hover:text-sky-300"
                    />
                  </svg>
                  <span className="-mr-1 font-medium">Perfil</span>
                </button>
              </li>
              <li>
              <button
                  onClick={()=> setCurrent("password")}
                  className={classNames(current == "password" ? "bg-[#5746af] !text-white" : "bg-white" ,"w-[95%] relative px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-600")}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      className="fill-current text-gray-300 group-hover:text-cyan-300"
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                      clipRule="evenodd"
                    />
                    <path
                      className="fill-current text-gray-600 group-hover:text-cyan-600"
                      d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                    />
                  </svg>
                  <span className="group-hover:text-gray-700">Senha</span>
                </button>
              </li>
              <li>
              <button
                  onClick={()=> setCurrent("servico")}
                  className={classNames(current == "servico" ? "bg-[#5746af] !text-white" : "bg-white" ,"w-[95%] relative px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-600")}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      className="fill-current text-gray-600 group-hover:text-cyan-600"
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    />
                    <path
                      className="fill-current text-gray-300 group-hover:text-cyan-300"
                      d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                    />
                  </svg>
                  <span className="group-hover:text-gray-700">Serviços</span>
                </button>
              </li>
            
            
            </ul>
          </div>
          <div className="px-6 -mx-6 pt-4 flex justify-between items-center ">
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="group-hover:text-gray-700">Sair</span>
            </button>
          </div>
        </aside>

        <main className="lg:px-0 col-span-2  sm:px-6 lg:flex-auto ">
{
  current == "profile"  ?


       <Profile 
 telefone={telefone && telefone}
 setTelefone={setTelefone}
 setEmail={setEmail}
 email={email && email}
 nome={nome}
 setNome={setNome}
 endereco={endereco}
 setEndereco={setEndereco}
 /> : current == "password" ?
 <Senha
 password={password}
 setPassword={setPassword}/>
 : <List servicos={servicos} />
}
        </main>
      </div>
    </>
  );
}
