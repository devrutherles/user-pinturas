'use client'
import React from "react";
import useRole from "./hooks/useRole";
import Link from "next/link";

const Client = () => {
  return (
    <>
      <section className="md:[&>section>section]:px-auto  [&>section>section>article]:mx-0 [&>section>section]:mb-0 [&>section>section]:mt-2 md-max:[&>section>section]:mx-auto">
        <section className="md:flex md:justify-center relative overflow-hidden md:overflow-auto">
          <section className="md:flex md:gap-10  md:px-0 container mt-32 mb-6 md:mb-12 text-gray-700">
            <article className="w-full py-4 md:w-1/2 relative z-10">
              <section className="md:mt-12 md:animate-fadeInUp lg:mt-28">
                <img
                  className="mb-6 block md:hidden float-right -mt-20 w-[188px] h-[180px]"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f70077803c444b2e1f/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  alt="Workana: Faça seu negócio crescer com o melhor talento remoto da América Latina."
                />
                <ul className="text-[12px] mb-2 mt-6 flex-wrap gap-x-4 gap-y-2 text-[#3d3d3d] hidden sm:flex font-medium">
                  <li
                    className="flex items-center gap-1  "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle h-4 w-4"
                    >
                      <g>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </g>
                    </svg>
                    <span>Consultoria grátis</span>
                  </li>
                  <li
                    className="flex items-center gap-1  "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-award h-4 w-4"
                    >
                      <g>
                        <circle cx={12} cy={8} r={7} />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </g>
                    </svg>
                    <span>Satisfação garantida</span>
                  </li>
                  <li
                    className="flex items-center gap-1  "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shield h-4 w-4"
                    >
                      <g>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </g>
                    </svg>
                    <span>Pagamentos protegidos</span>
                  </li>
                </ul>
                <h1 className="font-sans !leading-[40px] !text-[28px]  md:!leading-[56px]  tracking-normal text-mbl-5xl  font-medium mb-4 mt-0   md:!text-[45px]">
                  <span className="text-surface-text-high font-light">
                    Tenha sempre o melhor{" "}
                    <strong className="text-[#5746af] xl:block">
                      profissional
                    </strong>{" "}
                    pelo melhor preço
                  </span>
                </h1>
              </section>
              <div className="   md:animate-delay-200 md:animate-fadeInUp lg:mb-40">
                <h2 className="mb-6 text-[14px] font-normal ">
                  Poste um anúncio com os detalhes do serviço. <br />
                  Conectamos você com os melhores pintores adequados ao seu
                  serviço.{" "}
                </h2>
                <ul className=" mt-6 flex-wrap gap-x-4 gap-y-2 max-md:text-[12px] md:text-[16px] flex mb-6 sm:hidden">
                  <li
                    className="flex items-center gap-1 "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle h-4 w-4"
                    >
                      <g>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </g>
                    </svg>
                    <span>Consultoria grátis</span>
                  </li>
                  <li
                    className="flex items-center gap-1 "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-award h-4 w-4"
                    >
                      <g>
                        <circle cx={12} cy={8} r={7} />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </g>
                    </svg>
                    <span>Satisfação garantida</span>
                  </li>
                  <li
                    className="flex items-center gap-1 "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shield h-4 w-4"
                    >
                      <g>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </g>
                    </svg>
                    <span>Pagamentos protegidos</span>
                  </li>
                </ul>
                <div className="flex flex-col items-center gap-4 md:flex-row  md:flex-wrap md:mt-6 ">
                  <Link
                    className="inline-flex gap-4 items-center font-medium text-base rounded-full py-3 px-6 max-md:justify-center focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-primary hover:transition-colors w-full md:w-auto bg-[#5746af]  hover:bg-secondary-low active:bg-secondary-low text-[#fff] focus:bg-secondary-low"
                    href="/contratar"
                  >
                    Eu quero contratar
                  </Link>
                  <Link
                    className="inline-flex  items-center bg-transparent font-medium text-base rounded-full border-1 py-3 px-6 leading-[1.375] md:w-auto max-md:justify-center focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-primary hover:transition-colors !gap-2 !border-transparent text-[#5746af] border-secondary hover:text-secondary-low hover:border-secondary-low active:border-secondary-low active:text-secondary-low focus:text-secondary-low focus:border-secondary-low"
                    href="/trabalhar"
                  >
                    Você quer trabalhar?
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right h-6 w-6"
                    >
                      <g>
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <article className="hidden md:flex top-0 relative w-1/2 m-auto opacity-100 flex-row-reverse">
              <img
                className="md:animate-scaleIn"
                src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f7008753b42bfc1cfe/view?project=65f63eb7a14355c1ee4e&mode=admin"
                alt="Workana: Faça seu negócio crescer com o melhor talento remoto da América Latina."
              />
            </article>
          </section>
        </section>
      </section>
      <section className="my-16 flex justify-center px-4 ">
        <div className="container flex flex-col gap-8">
          <p className="font-sans leading-snug   text-[16px]  text-center text-caption font-normal uppercase tracking-widest !mb-0">
            A plataforma ideal para sua decoração
          </p>
          <section className="flex flex-col gap-8 md:flex-row">
            <article className="flex flex-col gap-4 rounded-[32px] p-6 md:w-1/2 bg-white">
              <p className="font-sans leading-snug   text-[16px]  text-caption font-normal uppercase tracking-widest !text-left !mb-0 !text-caption-lg text-[#5746af]">
                Profissionais de qualidade
              </p>
              <p className="text-[14px]">
                Uma rede de profissionais capacitados revisados periodicamente
                pela plataforma e com a garantia e referencia das avaliações de
                clientes anteriores
              </p>
            </article>
            <div className="flex gap-8 md:w-1/2">
              <div className="flex overflow-hidden rounded-[32px] w-full bg-primary-container">
                <img
                  alt=""
                  loading="lazy"
                  width={590}
                  height={180}
                  decoding="async"
                  data-nimg={1}
                  className="w-full object-cover"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f702ee616c560536c2/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-8 md:flex-row">
            <article className="flex flex-col gap-4 rounded-[32px] p-6 md:w-1/2 bg-white md:order-1">
              <p className="font-sans leading-snug   text-[16px]  text-caption font-normal uppercase tracking-widest !text-left !mb-0 !text-caption-lg text-[#5746af]">
                Confiança
              </p>
              <p className="text-[14px]">
                Todas as transações são controladas pela plataforma, o que
                garante que o serviço seja pago somente após a satisfação do
                cliente.
              </p>
            </article>
            <div className="flex gap-8 md:w-1/2">
              <div className="flex overflow-hidden rounded-[32px] w-7/12 bg-secondary-container">
                <img
                  alt="Programadores full-time"
                  loading="lazy"
                  width={320}
                  height={180}
                  decoding="async"
                  data-nimg={1}
                  className="w-full object-cover"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f7041eb7f6e7626d73/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="flex overflow-hidden rounded-[32px] w-5/12 bg-secondary-container">
                <img
                  alt="Freelancer"
                  loading="lazy"
                  width={235}
                  height={180}
                  decoding="async"
                  data-nimg={1}
                  className="w-full object-cover"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f702fb60690a533a27/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
const Worker = () => {
  return (
    <>
      <section className="md:[&>section>section]:px-auto  [&>section>section>article]:mx-0 [&>section>section]:mb-0 [&>section>section]:mt-2 md-max:[&>section>section]:mx-auto">
        <section className="md:flex md:justify-center relative overflow-hidden md:overflow-auto">
          <section className="md:flex md:gap-10  md:px-0 container mt-32 mb-6 md:mb-12 text-gray-700">
            <article className="w-full py-4 md:w-1/2 relative z-10">
              <section className="md:mt-12 md:animate-fadeInUp lg:mt-28">
                <img
                  className="mb-6 block md:hidden float-right -mt-20 w-[188px] h-[180px]"
                  src="https://wkncdn.com/p/uils/_next/static/media/hero-image-client-mobile.aeab15ee.webp"
                  alt="Workana: Faça seu negócio crescer com o melhor talento remoto da América Latina."
                />
                <ul className="text-[12px] mb-2 mt-6 flex-wrap gap-x-4 gap-y-2 text-[#3d3d3d] hidden sm:flex font-medium">
                  <li
                    className="flex items-center gap-1  "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle h-4 w-4"
                    >
                      <g>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </g>
                    </svg>
                    <span>Cadastro gratuito</span>
                  </li>
                  <li
                    className="flex items-center gap-1  "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-award h-4 w-4"
                    >
                      <g>
                        <circle cx={12} cy={8} r={7} />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </g>
                    </svg>
                    <span>Pagamentos protegidos</span>
                  </li>
                  <li
                    className="flex items-center gap-1  "
                    data-testid="hero-feature"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-dollar-sign h-4 w-4"
                    >
                      <g>
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </g>
                    </svg>
                    <span>Várias opções de saque</span>
                  </li>
                </ul>
                <h1 className="font-sans !leading-[40px] !text-[28px]  md:!leading-[56px]  tracking-normal text-mbl-5xl  font-medium mb-4 mt-0   md:!text-[45px]">
                  <span className="text-surface-text-high font-light">
                    Encontre seus{" "}
                    <strong className="text-[#5746af] xl:block">
                      clientes
                    </strong>{" "}
                    e ganhe dinheiro
                  </span>
                </h1>
              </section>
              <div className="   md:animate-delay-200 md:animate-fadeInUp lg:mb-40">
                <h2 className="mb-6 text-[14px] font-normal ">
                  Receba um anúncio com os detalhes do serviço. <br />
                  Conectamos você com milhares de clientes em busca de
                  profissionais.{" "}
                </h2>
                <ul className=" mt-6 flex-wrap gap-x-4 gap-y-2 max-md:text-[12px] md:text-[16px] flex mb-6 sm:hidden">
                  <li
                    className="flex items-center gap-1 "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle h-4 w-4"
                    >
                      <g>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </g>
                    </svg>
                    <span>Cadastro gratuito</span>
                  </li>
                  <li
                    className="flex items-center gap-1 "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-award h-4 w-4"
                    >
                      <g>
                        <circle cx={12} cy={8} r={7} />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </g>
                    </svg>
                    <span>Pagamento garatido</span>
                  </li>
                  <li
                    className="flex items-center gap-1 "
                    data-testid="hero-feature"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shield h-4 w-4"
                    >
                      <g>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </g>
                    </svg>
                    <span>Várias opções de saque</span>
                  </li>
                </ul>
                <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:mt-6 ">
                  <Link
                    className="inline-flex gap-4 items-center font-medium text-base rounded-full py-3 px-6 max-md:justify-center focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-primary hover:transition-colors w-full md:w-auto bg-[#5746af]  hover:bg-secondary-low active:bg-secondary-low text-[#fff] focus:bg-secondary-low"
                    href="/trabalhar"
                  >
                    Eu quero trabalhar
                  </Link>
                  <Link
                    className="inline-flex  items-center bg-transparent font-medium text-base rounded-full border-1 py-3 px-6 leading-[1.375] md:w-auto max-md:justify-center focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-primary hover:transition-colors !gap-2 !border-transparent text-[#5746af] border-secondary hover:text-secondary-low hover:border-secondary-low active:border-secondary-low active:text-secondary-low focus:text-secondary-low focus:border-secondary-low"
                    href="/contratar"
                  >
                    Você quer contratar?
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right h-6 w-6"
                    >
                      <g>
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <article className="hidden md:flex top-0 relative w-1/2 m-auto opacity-100 flex-row-reverse">
              <img
                className="md:animate-scaleIn"
                src="https://wkncdn.com/p/uils/_next/static/media/hero-image-client.4f5cbaa7.webp"
                alt="Workana: Faça seu negócio crescer com o melhor talento remoto da América Latina."
              />
            </article>
          </section>
        </section>
      </section>
      <section className="my-16 flex justify-center px-4 ">
        <div className="container flex flex-col gap-8">
          <p className="font-sans leading-snug   text-[16px]  text-center text-caption font-normal uppercase tracking-widest !mb-0">
            A plataforma ideal para alavancar seus ganhos
          </p>
          <section className="flex flex-col gap-8 md:flex-row">
            <article className="flex flex-col gap-4 rounded-[32px] p-6 md:w-1/2 bg-white">
              <p className="font-sans leading-snug   text-[16px]  text-caption font-normal uppercase tracking-widest !text-left !mb-0 !text-caption-lg text-[#5746af]">
                Trabalhos contantes
              </p>
              <p className="text-[14px]">
                Uma rede de clientes cadastrados que precisam encontrar o
                profissional ideal, aumente seus ganhos de forma fácil
              </p>
            </article>
            <div className="flex gap-8 md:w-1/2">
              <div className="flex overflow-hidden rounded-[32px] w-full bg-primary-container">
                <img
                  alt=""
                  loading="lazy"
                  width={590}
                  height={180}
                  decoding="async"
                  data-nimg={1}
                  className="w-full object-cover"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f702ee616c560536c2/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-8 md:flex-row">
            <article className="flex flex-col gap-4 rounded-[32px] p-6 md:w-1/2 bg-white md:order-1">
              <p className="font-sans leading-snug   text-[16px]  text-caption font-normal uppercase tracking-widest !text-left !mb-0 !text-caption-lg text-[#5746af]">
                Confiança
              </p>
              <p className="text-[14px]">
                Todas as transações são controladas pela plataforma, o que
                garante que o serviço seja pago após a conclusão.
              </p>
            </article>
            <div className="flex gap-8 md:w-1/2">
              <div className="flex overflow-hidden rounded-[32px] w-7/12 bg-secondary-container">
                <img
                  alt="Programadores full-time"
                  loading="lazy"
                  width={320}
                  height={180}
                  decoding="async"
                  data-nimg={1}
                  className="w-full object-cover"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f7041eb7f6e7626d73/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="flex overflow-hidden rounded-[32px] w-5/12 bg-secondary-container">
                <img
                  alt="Freelancer"
                  loading="lazy"
                  width={235}
                  height={180}
                  decoding="async"
                  data-nimg={1}
                  className="w-full object-cover"
                  src="https://cloud.appwrite.io/v1/storage/buckets/public/files/65f702fb60690a533a27/view?project=65f63eb7a14355c1ee4e&mode=admin"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
export default function Home() {
  const role = useRole()
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl ">
        {role != "worker" ? <Client /> : <Worker />}
      </div>
    </div>
  );
}