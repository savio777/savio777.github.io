import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 | sávio dev</title>
      </Head>

      <h1>404</h1>

      <div>
        <p>Oops, não conseguimos encontrar essa página!</p>
        <span>Clique no botão abaixo para ser direcionado à Página Inicial</span>
      </div>

      <Link href='/'>Ir para a Página Inicial</Link>
    </>
  )
}