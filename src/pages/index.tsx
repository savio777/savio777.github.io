import { GetServerSideProps } from "next";
import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";
import Projects from "@/components/Home/Projects";
import { IHomeData } from "@/types/Home";
import getData from "@/utils/api";

export default function Home({ data }: { data: IHomeData }) {
  return (
    <>
      <Head>
        <title>Sobre mim | sávio dev</title>
        <meta name="title" content={data.aboutMe.name} />
        <meta name="description" content={data.aboutMe.description} />
        <meta name="image" content={data.aboutMe.pfp.image.url} />
      </Head>

      <div className="py-12 px-6 md:px-32 md:space-y-28">
        <AboutMe aboutMe={data.aboutMe} />
        <Projects projects={data.projects} />
      </div>
    </>
  )
}

// o melhor é usar getStaticProps, getServerSideProps para estudos
export const getServerSideProps: GetServerSideProps<{ data: IHomeData }> = async () => {
  const data = await getData()

  return {
    props: {
      data
    }
  }
}
