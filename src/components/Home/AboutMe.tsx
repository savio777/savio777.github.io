import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

const AboutMe: React.FC = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          Prazer, sou&nbsp;
          <span className="font-bold">Sávio</span>
        </h1>

        <div className="mb-12">
          <h2 className={`${poppins.className} mb-12`}>
            Graduado em análise e desenvolvimento de sistemas. Atualmente trabalho como desenvolvedor Full Stack usando React, React-native, Typescript e NodeJs
          </h2>

          <Link href='/contatos' className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
        </div>

        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li style={{ backgroundColor: '#efd81d', color: '#000' }} className="w-fit p-2 rounded-md">javascript</li>
          <li style={{ backgroundColor: '#6bddfa', color: '#000' }} className="w-fit p-2 rounded-md">react-native</li>
          <li style={{ backgroundColor: '#2f74c0', color: '#ffff' }} className="w-fit p-2 rounded-md">typecript</li>
          <li style={{ backgroundColor: '#61DAFB', color: '#000' }} className="w-fit p-2 rounded-md">react</li>
        </ul>
      </div>

      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/35678887?v=4"
          alt="avatar github"
          className="rounded-full"
          width={500}
          height={500}
          unoptimized
        />

        <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
          <span className="text-4xl">3+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
}

export default AboutMe;