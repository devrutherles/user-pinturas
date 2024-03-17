"use client";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Select from "../../components/select";
import { databases, ID, Query } from "../../appwrite";
import { useEffect, useState } from "react";
import Notification from "@/app/components/notification";

export default function Servicos({ params }) {
  const [servico, setServico] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const id = params.id;
  const [comodos, setComodos] = useState({ id: 1, name: "1 comodo" });
  const [precoComodos, setPrecoComodos] = useState(null);
  const [metragem, setMetragem] = useState(1);
  const [oferta, setOferta] = useState();
  const [pintura, setPintura] = useState(1);
  const [visita, setVisita] = useState();
  const [whatsapp, setWhatsapp] = useState("");
  const [user, setUser] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  console.log(metragem, servico);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let promise = databases.listDocuments("pintura", "precos", [
      Query.equal("tipo", id),
    ]);

    const getPreco = () => {
      setUser(JSON.parse(localStorage.getItem("user")));

      promise.then(
        function (response) {
          setServico(response?.documents[0]);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    getPreco();
  }, []);

  const data = {
    user: user?.name,
    comodos: comodos?.name,
    servico: servico == 1 ? "Pintura interna" : "Pintura externa",
    oferta: parseInt(oferta)  || 0,
    visita: visita,
    telefone: whatsapp,
    m2: metragem,
    valor:
      pintura == 1
        ? comodos?.id * servico?.pintura
        : metragem * servico?.repintura,
  };

  console.log(data);

  const createServico = () => {
    setIsloading(true);

    const promise = databases.createDocument(
      "pintura",
      "servicos",
      ID.unique(),
      data
    );

    promise.then(
      function (response) {
        setIsloading(false);

        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
        setIsloading(false);

      }
    );
  };

  return (
    <>
      {isClient ? (
   
        <div className="space-y-10 divide-y divide-gray-900/10 mt-10 ">
               <Notification/>
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
                  {id == "interna" ? (
                    <Select setComodos={setComodos} comodos={comodos} />
                  ) : (
                    <></>
                  )}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Metragem
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        min={1}
                        name="first-name"
                        value={id != "interna" ? metragem : null}
                        onChange={(e) => setMetragem(e.target.value)}
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Tipo da pintura
                    </legend>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Escolha o tipo de pintura que você deseja
                    </p>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="1"
                          name="pintura-tipo"
                          type="radio"
                          value={pintura}
                          defaultChecked
                          onChange={(e) => setPintura(e.target.id)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="pintura-tipo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Pintura nova
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="2"
                          name="pintura-tipo"
                          type="radio"
                          value={pintura}
                          onChange={(e) => setPintura(e.target.id)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="pintura"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Repintura
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Whatsapp
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        name="whatsapp"
                        id="whatsapp"
                        autoComplete="given-name"
                        className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <fieldset>
                    <div className="mt-6 space-y-6">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="visita"
                            name="visita"
                            type="checkbox"
                            onChange={() => setVisita(!visita)}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor="visita"
                            className="font-medium text-gray-900"
                          >
                            Orçamento
                          </label>
                          <p className="text-gray-500">
                            Solicitar orçamento com visita técnica
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <div className="px-4 sm:px-0">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      {id == "interna"
                        ? "Número de Comodos " + comodos.id
                        : "Metragem total" + metragem + " m²"}
                    </h2>
                    <p className="text-gray-500">
                      Valor Sugerido R$


                      {servico?.pintura ?
                      <>
                      {id == "interna" && servico?.pintura
                        ? id == "interna" && pintura == 1
                          ? comodos?.id * servico?.pintura
                          : comodos?.id * servico?.repintura
                        : <></>}
                      {id == "externa" && servico?.pintura
                        ? id == "externa" && pintura == 1
                          ? metragem * servico?.pintura
                          : metragem * servico?.repintura
                        : <></>}
</>
                        : 0}
                        
                    </p>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="oferta"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Valor que deseja pagar{" "}
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            onChange={(e) => setOferta(e.target.value)}
                            name="oferta"
                            id="oferta"
                            autoComplete="given-name"
                            className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => createServico()}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
              "Enviar"
            )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
