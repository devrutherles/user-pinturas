import React from "react";
import Options from "../components/options";
import Link from "next/link";

export default function Contratar() {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl ">
        <section className="container choose-wrapper mx-auto px-[15px] my-8">
          <div className="max-w-[720px] mx-auto my-0 pb-[40px] break-words">
            <div className="mb-12">
              <Link href={"/"} className="flex gap-[8px] mb-[8px] pl-[0] pr-[24px] py-[12px] text-[#5746af] w-[150px]">
                <img
                  src="https://wkncdn.com/newx/assets/build/img/signup/arrow-left.fc0b951aa.svg"
                  alt=""
                />{" "}
                <p>Voltar</p>
              </Link>{" "}
              <h1 className="text-[#141414] font-['IBM_Plex_Sans',_sans-serif] text-[28px] not-italic font-normal leading-[40px]  mt-[8px] text-left">
                Qual seu tipo de serviço?
              </h1>
              <h2 className="mb-[24px] text-[14px] font-normal ">
                Escolha corretamente para podermos indicar o serviço mais
                adequado.{" "}
              </h2>
            </div>{" "}
            <Options />
          </div>
        </section>
      </div>
    </div>
  );
}
