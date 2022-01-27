export type ProjectImageType = {
  id: number;
  type: "image/webp" | "image/jpeg";
  picture: string;
};

export type ProjectType = {
  id: number;
  name: string;
  imageLinks?: ProjectImageType[];
  description: string;
  link?: string;
};
