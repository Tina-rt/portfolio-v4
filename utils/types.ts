export interface Project {
  title: string;
  description: string;
  coverImage: string;
  skills: string[];
  sourceLink?: string;
  demoLink?: string;
}

export interface Experience {
  title: string;
  company: string;
  daterange: string;
  description: string;
  skils: string[];
}
