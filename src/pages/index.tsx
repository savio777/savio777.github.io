import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | sávio dev</title>
        <meta name="description" content="Graduate in analysis and development of systems. Currently i'm working as Full Stack developer using React, React-native, Typescript and NodeJs" />
      </Head>

      <div>
        <AboutMe />
      </div>
    </>
  )
}
