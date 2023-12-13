import Head from "next/head";
import Link from "next/link";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | sávio dev</title>
      </Head>

      <div className="flex flex-col items-center gap-8 md:gap-4 text-center mt-12 md:mt-24 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold">404</h1>

        <p className="flex flex-col gap-8 md:gap-4 md:text-xl">
          <span>
            Oops, não conseguimos encontrar essa página!
          </span>
          <span>
            Clique no botão abaixo para ser direcionado à Página Inicial
          </span>
        </p>

        <Link href='/' className={`${poppins.className} md:text-xl w-fit p-4 bg-h-blue-500 text-black mt-5 md:mt-12 rounded-xl`} >
          Ir para a Página Inicial
        </Link>
      </div>
    </>
  )
}