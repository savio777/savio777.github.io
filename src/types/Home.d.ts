export interface IHomeData {
  aboutMe: AboutMe;
  projects: Project[];
}

export interface AboutMe {
  name: string;
  description: string;
  techs: Tech[];
  pfp: Pfp;
}

export interface Pfp {
  image: ImageProject;
  experience: string;
}

export interface ImageProject {
  url: string;
  alt: string;
}

export interface Tech {
  tech: string;
  color: string;
  bgcolor: string;
}

export interface Project {
  slug: string;
  name: string;
  image: ImageProject;
}
