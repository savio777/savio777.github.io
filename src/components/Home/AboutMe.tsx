import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google'
import { IHomeData, } from "@/types/Home";

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

const AboutMe: React.FC<Pick<IHomeData, 'aboutMe'>> = ({ aboutMe }) => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          Prazer, sou&nbsp;
          <span className="font-bold">{aboutMe.name}</span>
        </h1>

        <div className="mb-12">
          <h2 className={`${poppins.className} mb-12`}>
            {aboutMe.description}
          </h2>

          <Link href='/contatos' className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse comigo!</Link>
        </div>

        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          {aboutMe?.techs?.length && aboutMe.techs.map((techItem, index) => (
            <li key={`${techItem.tech}-${index}`}
              style={{ backgroundColor: techItem.bgcolor, color: techItem.color }}
              className="w-fit p-2 rounded-md"
            >
              {techItem.tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <Image
          src={aboutMe.pfp.image.url}
          alt={aboutMe.pfp.image.alt}
          className="rounded-full"
          width={500}
          height={500}
          unoptimized
        />

        <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
          <span className="text-4xl">{aboutMe.pfp.experience}</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
}

export default AboutMe;