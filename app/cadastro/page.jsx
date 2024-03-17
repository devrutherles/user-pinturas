"use client";
import React from "react";

import FormCadastro from "../components/formCdastro";
import Link from "next/link";

export default function Cadastro() {




  return (
    <>
      <div className="flex min-h-full flex-1 pb-8">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Cadastre-se na plataforma
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Já possui conta?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-[#5746af] hover:text-[#978cce]"
                >
                  Entre agora!
                </Link>
              </p>
            </div>
            <div className="mt-10">

            <FormCadastro />
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 -mr-[50px] md:block ">
          <img
            className="absolute inset-0 h-full w-full object-cover object-left"
            src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f70afa0f2cbdbd8fe5/view?project=65f63eb7a14355c1ee4e&mode=admin"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
