import { Project } from "@/types/Home";
import Image from "next/image";
import Link from "next/link";

interface IProjectsProps {
  projects: Project[];
}

const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-2xl md:text-4xl">Recent projects</h2>

      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ image, name, slug }, index) => (
          <Link key={`${name}-${index}`} href={`/projects/${slug}`}>
            <li className="text-md relative ">
              <Image
                src={image.url}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover rounded-2xl mb-4"
                unoptimized
              />

              <span>{name}</span>

              <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[20px] -right-[20px]">
                <span>{index + 1}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
};

export default Projects;
