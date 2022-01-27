import React from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailsType } from "../../types/ProjectDetails.type";

import AnimeProject320wWEBP from "../../assets/images/anime-project-320w.webp";
import AnimeProject320wJPG from "../../assets/images/anime-project-320w.jpg";
import AnimeProject375wWEBP from "../../assets/images/anime-project-375w.webp";
import AnimeProject375wJPG from "../../assets/images/anime-project-375w.jpg";
import AnimeProject425wWEBP from "../../assets/images/anime-project-425w.webp";
import AnimeProject425wJPG from "../../assets/images/anime-project-425w.jpg";
import AnimeProject768wWEBP from "../../assets/images/anime-project-768w.webp";
import AnimeProject768wJPG from "../../assets/images/anime-project-768w.jpg";
import AnimeProject1024wWEBP from "../../assets/images/anime-project-1024w.webp";
import AnimeProject1024wJPG from "../../assets/images/anime-project-1024w.jpg";
import AnimeProject1920wWEBP from "../../assets/images/anime-project-1920w.webp";
import AnimeProject1920wJPG from "../../assets/images/anime-project-1920w.jpg";

import styles from "./ProjectDetails.module.scss";

type Props = {};

const projects: ProjectDetailsType[] = [
  {
    id: 0,
    name: "Anime Project",
    heroImages: [
      {
        id: 0,
        type: "image/webp",
        link: AnimeProject320wWEBP,
        media: "(max-width: 320px)",
      },
      {
        id: 1,
        type: "image/jpeg",
        link: AnimeProject320wJPG,
        media: "(max-width: 320px)",
      },
      {
        id: 2,
        type: "image/webp",
        link: AnimeProject375wWEBP,
        media: "(max-width: 375px)",
      },
      {
        id: 3,
        type: "image/jpeg",
        link: AnimeProject375wJPG,
        media: "(max-width: 375px)",
      },
      {
        id: 4,
        type: "image/webp",
        link: AnimeProject425wWEBP,
        media: "(max-width: 425px)",
      },
      {
        id: 5,
        type: "image/jpeg",
        link: AnimeProject425wJPG,
        media: "(max-width: 425px)",
      },
      {
        id: 6,
        type: "image/webp",
        link: AnimeProject768wWEBP,
        media: "(max-width: 768px)",
      },
      {
        id: 7,
        type: "image/jpeg",
        link: AnimeProject768wJPG,
        media: "(max-width: 768px)",
      },
      {
        id: 8,
        type: "image/webp",
        link: AnimeProject1024wWEBP,
        media: "(max-width: 1024px)",
      },
      {
        id: 9,
        type: "image/jpeg",
        link: AnimeProject1024wJPG,
        media: "(max-width: 1024px)",
      },
      {
        id: 10,
        type: "image/webp",
        link: AnimeProject1920wWEBP,
      },
      {
        id: 11,
        type: "image/jpeg",
        link: AnimeProject1920wJPG,
      },
    ],
    description:
      "The web app to discover new animes or finding information about specific anime",
    skills: [
      {
        id: 0,
        title: "GraphQL API",
        text: "Learned to work in React with api made in GraphQL",
      },
      {
        id: 1,
        title: "Sliders",
        text: "Made sliders that you can drag with cursor/touch or move with the buttons on your computer and phone",
      },
      {
        id: 2,
        title: "Theme switching",
        text: "Made switching light and dark themes or choosing an automatic one that switches the theme depending on your browser settings",
      },
    ],
    link: "https://anime-project-gules.vercel.app/",
  },
  {
    id: 1,
    name: "Budget Planner",
    heroImages: [
      {
        id: 0,
        type: "image/webp",
        link: AnimeProject320wWEBP,
        media: "(max-width: 320px)",
      },
      {
        id: 1,
        type: "image/jpeg",
        link: AnimeProject320wJPG,
        media: "(max-width: 320px)",
      },
      {
        id: 2,
        type: "image/webp",
        link: AnimeProject375wWEBP,
        media: "(max-width: 375px)",
      },
      {
        id: 3,
        type: "image/jpeg",
        link: AnimeProject375wJPG,
        media: "(max-width: 375px)",
      },
      {
        id: 4,
        type: "image/webp",
        link: AnimeProject425wWEBP,
        media: "(max-width: 425px)",
      },
      {
        id: 5,
        type: "image/jpeg",
        link: AnimeProject425wJPG,
        media: "(max-width: 425px)",
      },
      {
        id: 6,
        type: "image/webp",
        link: AnimeProject768wWEBP,
        media: "(max-width: 768px)",
      },
      {
        id: 7,
        type: "image/jpeg",
        link: AnimeProject768wJPG,
        media: "(max-width: 768px)",
      },
      {
        id: 8,
        type: "image/webp",
        link: AnimeProject1024wWEBP,
        media: "(max-width: 1024px)",
      },
      {
        id: 9,
        type: "image/jpeg",
        link: AnimeProject1024wJPG,
        media: "(max-width: 1024px)",
      },
      {
        id: 10,
        type: "image/webp",
        link: AnimeProject1920wWEBP,
      },
      {
        id: 11,
        type: "image/jpeg",
        link: AnimeProject1920wJPG,
      },
    ],
    description: "Small web app to manage your income and expenses",
    skills: [
      {
        id: 0,
        title: "Angular",
        text: "Learned the basics of the Angular framework",
      },
    ],
    link: "https://budget-planner-six.vercel.app/dashboard",
  },
];

export const ProjectDetails = (props: Props) => {
  const { id } = useParams();
  const project =
    id !== null && !isNaN(Number(id))
      ? projects.find(
          (project: ProjectDetailsType) => project.id === Number(id)
        )
      : null;
  if (project) {
    return (
      <div className={styles["project-details"]}>
        <h1 className={styles["project-details__title"]}>{project.name}</h1>
        {project.heroImages && project.heroImages.length > 0 ? (
          <picture>
            {project.heroImages.map((heroImage) => (
              <source
                key={heroImage.id}
                srcSet={heroImage.link}
                type={heroImage.type}
                media={heroImage.media}
              />
            ))}
            <img
              className={styles["project-details__image"]}
              src={project.heroImages[project.heroImages.length - 1].link}
              alt="Project Illustration"
            />
          </picture>
        ) : null}
        <p className={styles["project-details__description"]}>
          {project.description}
        </p>
        <a
          className={styles["project-details__link"]}
          href={project.link}
          target={"_blank"}
          rel="noreferrer"
        >
          Visit the website
        </a>
        <section className={styles["project-details-skills"]}>
          <h2 className={styles["project-details-skills__title"]}>Skills</h2>
          <ul className={styles["project-details-skills-list"]}>
            {project.skills.map((skill) => (
              <li
                key={skill.id}
                className={styles["project-details-skills-list-item"]}
              >
                <h3
                  className={styles["project-details-skills-list-item__title"]}
                >
                  {skill.title}
                </h3>
                <p className={styles["project-details-skills-list-item__text"]}>
                  {skill.text}
                </p>
                {skill.illustrations && skill.illustrations.length > 0 ? (
                  <picture>
                    {skill.illustrations.map((illustration) => (
                      <source
                        key={illustration.id}
                        src={illustration.link}
                        type={illustration.type}
                      />
                    ))}
                    <img
                      className={
                        styles["project-details-skills-list-item__illustration"]
                      }
                      src={
                        skill.illustrations[skill.illustrations.length - 1].link
                      }
                      alt={`${skill.text} illustration`}
                    />
                  </picture>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        {project.screenshots && project.screenshots.length > 0 ? (
          <ul className={styles["project-details-screenshots"]}>
            {project.screenshots.map((screenshot) => (
              <li key={screenshot.id}>
                {screenshot && screenshot.images.length > 0 ? (
                  <picture>
                    {screenshot.images.map((image) => (
                      <source
                        key={image.id}
                        src={image.link}
                        type={image.link}
                      />
                    ))}
                    <img
                      src={screenshot.images[screenshot.images.length - 1].link}
                      alt="screenshot"
                    />
                  </picture>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
  return <h1>Project Not Found</h1>;
};
