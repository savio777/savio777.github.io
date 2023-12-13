import Head from "next/head";
import Link from "next/link";

export default function Contatos() {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>

      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-16 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>

        <ul className="table mx-auto space-y-6 md:space-y-8">
          <li className="md:text-xl">
            <span className="font-bold">E-mail</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a className="text-sm md:text-lg text-slate-300 underline truncate" target="_blank" href="mailto:saviopf22@gmail.com" rel="noreferrer">saviopf22@gmail.com</a>
            </div>
          </li>

          <li className="md:text-xl">
            <span className="font-bold">Linkedin</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a className="text-sm md:text-lg text-slate-300 underline truncate" target="_blank" href="https://www.linkedin.com/in/s%C3%A1vio-pal%C3%A1cio-fontes-3924aa16b/" rel="noreferrer">linkedin.com/in/s%C3%A1vio-pal%C3%A1cio-fontes-3924aa16b/</a>
            </div>
          </li>

          <li className="md:text-xl">
            <span className="font-bold">Github</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a className="text-sm md:text-lg text-slate-300 underline truncate" target="_blank" href="https://github.com/savio777" rel="noreferrer">github.com/savio777</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}