import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";
import Projects from "@/components/Home/Projects";
import { IHomeData } from "@/types/Home";
import { GetStaticProps } from "next";

export default function Home({ data }: { data: IHomeData }) {
  return (
    <>
      <Head>
        <title>Sobre mim | sávio dev</title>
        <meta name="description" content="Graduate in analysis and development of systems. Currently i'm working as Full Stack developer using React, React-native, Typescript and NodeJs" />
      </Head>

      <div className="py-12 px-6 md:px-32 md:space-y-28">
        <AboutMe aboutMe={data.aboutMe} />
        <Projects projects={data.projects} />
      </div>
    </>
  )
}

const loadHome = async () => {
  const res = await fetch('https://gist.githubusercontent.com/savio777/84e05621c6e592d76845dfd57cbe1327/raw/5c79dc634b92a183c7f20b8e19e2fa4908f3c26f/portfolio-contact-data.json')

  const resJson = await res.json()

  return resJson
}

export const getServerSideProps: GetStaticProps<{ data: IHomeData }> = async () => {
  const data = await loadHome()

  return {
    props: {
      data
    }
  }
}
