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
        <title>About me | Sávio dev</title>
        <meta name="title" content="Hello, sou Sávio" />
        <meta
          name="description"
          content="Graduado em análise e desenvolvimento de sistemas. Atualmente trabalho como desenvolvedor Full Stack usando React, React-native, Typescript e NodeJs"
        />
        <meta
          name="image"
          content="https://avatars.githubusercontent.com/u/35678887?v=4"
        />
      </Head>

      <div className="py-12 px-6 md:px-32 md:space-y-28">
        <AboutMe aboutMe={data.aboutMe} />
        <Projects projects={data.projects} />
      </div>
    </>
  );
}

// o melhor é usar getStaticProps, getServerSideProps para estudos
export const getServerSideProps: GetServerSideProps<{
  data: IHomeData;
}> = async () => {
  const data = await getData();

  return {
    props: {
      data,
    },
  };
};
