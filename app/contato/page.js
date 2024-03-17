"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className=" px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10  overflow-hidden sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <a
          href="/"
          className="flex gap-[8px] mb-[8px] pl-[0] pr-[24px] py-[12px] text-[#5746af] w-[150px]"
        >
          <img src="https://wkncdn.com/newx/assets/build/img/signup/arrow-left.fc0b951aa.svg" />{" "}
          <p>Voltar</p>
        </a>
        <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
          Fale conosco
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Nossa equipe está a disposição para te ajudar a qualquer hora
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-600"
            >
              Nome{" "}
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm focus:ring=[#5746af]  placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-600"
            >
              Sobrenome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm focus:ring=[#5746af]  placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-600"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm focus:ring=[#5746af]  placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-600"
            >
              Telefone
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-600 shadow-sm focus:ring=[#5746af]  placeholder:text-gray-400   sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-600"
            >
              Mensagem
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm focus:ring=[#5746af]  placeholder:text-gray-400   sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#5746af] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#735fda] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5746af]"
          >
            Enviar mensagem
          </button>
        </div>
      </form>
    </div>
  );
}
