"use client";
import React from "react";
import { useState } from "react";
import { account, ID } from "@/app/appwrite";
import { useRouter } from "next/router";
import FormLogin from "../components/formLogin";
import Link from "next/link";
export default function Page() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");



  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
             
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Entre na sua conta
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Não possui conta?{" "}
                <Link
                  href="/cadastro"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Cadastre-se agora!
                </Link>
              </p>
            </div>

            <div className="mt-10">
       <FormLogin/>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  
                </div>

              </div>
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
