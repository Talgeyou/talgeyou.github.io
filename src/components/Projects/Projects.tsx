import React, { Dispatch, SetStateAction, useCallback } from "react";
import { ProjectType } from "../../types/Project.type";
import { Project } from "../Project/Project";
import styles from "./Projects.module.scss";
import animeProjectPictureWEBP from "../../assets/images/anime-project.webp";
import animeProjectPictureJPG from "../../assets/images/anime-project.jpg";
import budgetPlannerPictureWEBP from "../../assets/images/budget-planner.webp";
import budgetPlannerPictureJPG from "../../assets/images/budget-planner.jpg";
import minnaGenshinPictureWEBP from "../../assets/images/minna-genshin.webp";
import minnaGenshinPictureJPG from "../../assets/images/minna-genshin.jpg";

interface Props {
  currentSlide?: number;
  setCurrentSlide?: Dispatch<SetStateAction<number>>;
}

export const Projects = (props: Props) => {
  const { currentSlide, setCurrentSlide } = props;

  const projects: ProjectType[] = [
    {
      id: 0,
      name: "Anime Project",
      imageLinks: [
        { id: 0, type: "image/webp", picture: animeProjectPictureWEBP },
        { id: 1, type: "image/jpeg", picture: animeProjectPictureJPG },
      ],
      description: "It's a web app that can help you to find an anime",
      link: "https://anime-project-gules.vercel.app/",
    },
    {
      id: 1,
      name: "Budget Planner",
      imageLinks: [
        { id: 0, type: "image/webp", picture: budgetPlannerPictureWEBP },
        { id: 1, type: "image/jpeg", picture: budgetPlannerPictureJPG },
      ],
      description: "It's a web app that can help you to manage your budget",
      link: "https://budget-planner-six.vercel.app/",
    },
    {
      id: 2,
      name: "Minna Genshin",
      imageLinks: [
        { id: 0, type: "image/webp", picture: minnaGenshinPictureWEBP },
        { id: 1, type: "image/jpeg", picture: minnaGenshinPictureJPG },
      ],
      description: "It's a web app with useful genshin impact tools",
      link: "https://talgeyou.github.io/minna-genshin",
    },
  ];

  const handleButtonClick = useCallback(() => {
    if (setCurrentSlide) {
      setCurrentSlide(2);
    }
  }, [setCurrentSlide]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projects}>
        {projects.map((project: ProjectType) => (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
            imageLinks={project.imageLinks}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <button className={styles.button} onClick={handleButtonClick}>
        Contact with me
      </button>
    </div>
  );
};
