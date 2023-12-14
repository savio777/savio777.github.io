export interface ImageProject {
  url: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  image: ImageProject;
}
