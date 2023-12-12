import Head from "next/head";
import Link from "next/link";

export default function Contatos() {
  return (
    <>
      <Head>
        <title>Contatos</title>
      </Head>

      <div>
        <h1>Contatos</h1>

        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a target="_blank" href="mailto:saviopf22@gmail.com" rel="noreferrer">saviopf22@gmail.com</a>
            </div>
          </li>

          <li>
            <span>Linkedin</span>
            <div>
              <a target="_blank" href="https://www.linkedin.com/in/s%C3%A1vio-pal%C3%A1cio-fontes-3924aa16b/" rel="noreferrer">linkedin.com/in/s%C3%A1vio-pal%C3%A1cio-fontes-3924aa16b/</a>
            </div>
          </li>

          <li>
            <span>Github</span>
            <div>
              <a target="_blank" href="https://github.com/savio777" rel="noreferrer">github.com/savio777</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}