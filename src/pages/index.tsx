import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe";
import Projects from "@/components/Home/Projects";

const projects = [
  {
    slug: 'taxi2go',
    name: 'Taxi2Go',
    image: {
      url: 'https://play-lh.googleusercontent.com/Po6ZAmmuONIyohOafSjGvbXq7QFpP4dduKhTjfz8hnAAJOH2cjHgtW1s5IbXC-J_NG4=w240-h480-rw',
      alt: 'Ícone do app Taxi2Go'
    }
  },
  {
    slug: 'riviera.consumidor',
    name: 'MyRiviera',
    image: {
      url: 'https://play-lh.googleusercontent.com/Ja8uKjlPjKeu1ou_WL3L6Lw9MuUkQD0scAn37V6fCmWlvHN03sruLXmlySuQnJqOcNQ=w240-h480-rw',
      alt: 'Ícone do app MyRiviera'
    }
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | sávio dev</title>
        <meta name="description" content="Graduate in analysis and development of systems. Currently i'm working as Full Stack developer using React, React-native, Typescript and NodeJs" />
      </Head>

      <div className="py-12 px-6 md:px-32 md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  )
}
