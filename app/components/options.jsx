"use client";

import Link from "next/link";

export default function Options() {
  return (
    <section
      className=" relative z-10  flex justify-center "
      id="chooseModalityBlock"
    >
      <div className="container  flex flex-col gap-12 md:flex-row md:gap-8 lg:gap-10">
        <Link
          className="flex break-words flex-col gap-4 border bg-white  p-6  rounded-[32px] transition-colors hover:border-[#5746af] lg:w-1/2"
          data-testid="home-modality-card"
           href={'/servico/interna'}
        >
          <header className="flex flex-col gap-4">
            <div  href={'/servico/interna'}  className="flex items-center  ">
              <img
                className="!aspect-auto h-10  mr-4"
                src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f687cb6da92412c76a/view?project=65f63eb7a14355c1ee4e&mode=admin"
                alt="Contrate Desenvolvedores full-time"
              />
              <p className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                MINHA PINTURA É INTERNA
              </p>
            </div>
          </header>
          <div className="flex flex-col lg:h-full lg:justify-between">
            <p className="text-[14px]">
              Os ambientes internos incluem salas de estar, quartos, banheiros,
              cozinha, área de serviço, escritório e demais cômodos não visíveis
              externamente.
            </p>
          </div>
        </Link>
        <Link
          className="flex break-words flex-col gap-4 border bg-white  p-6  rounded-[32px] transition-colors hover:border-[#5746af] lg:w-1/2"
          data-testid="home-modality-card"
          href={'/servico/externa'}
        >

          <header className="flex flex-col gap-4">
            <div   className="flex items-center  ">
              
              <img
                className="!aspect-auto h-10  mr-4"
                src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f687c00c4a9eeff4ef/view?project=65f63eb7a14355c1ee4e&mode=admin"
                alt="Contrate freelancers por projeto"
              />
              <p className="font-sans leading-snug   tracking-normal text-mbl-2xl md:text-16px font-medium mb-0 mt-1 uppercase  text-[#5746af]">
                MINHA PINTURA É EXTERNA{" "}
              </p>{" "}
            </div>
          </header>
          <div className="flex flex-col lg:h-full lg:justify-between">
            <p className="text-[14px]">
              Os ambientes visíveis na parte de fora: varanda, sacada, jardim,
              garagem, quadras esportivas, área de lazer, entre outras.
            </p>
          </div>
          </Link>

      </div>
    </section>
  );
}
