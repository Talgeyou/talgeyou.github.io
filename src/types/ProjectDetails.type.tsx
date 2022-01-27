export type ProjectDetailsImageType = {
  id: number;
  type: "image/webp" | "image/jpeg";
  link: string;
  media?: string;
};

export type ProjectDetailsSkillType = {
  id: number;
  title: string;
  text?: string;
  illustrations?: ProjectDetailsImageType[];
};

export type ProjectDetailsScreenshotType = {
  id: number;
  images: ProjectDetailsImageType[];
};

export type ProjectDetailsType = {
  id: number;
  heroImages?: ProjectDetailsImageType[];
  name: string;
  description: string;
  skills: ProjectDetailsSkillType[];
  screenshots?: ProjectDetailsScreenshotType[];
  link?: string;
};
