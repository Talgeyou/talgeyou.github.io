import React from "react";
import { ProjectImageType } from "../../types/Project.type";
import styles from "./Project.module.scss";

interface Props {
  id: number;
  name: string;
  imageLinks?: ProjectImageType[];
  description: string;
  link?: string;
}

export const Project = (props: Props) => {
  const { id, name, imageLinks, description, link } = props;

  return (
    <article id={id.toString()} className={styles.wrapper}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.image}>
        {imageLinks && imageLinks.length > 0 ? (
          <picture>
            {imageLinks.map((imageLink: ProjectImageType) => (
              <source
                key={imageLink.id}
                src={imageLink.picture}
                type={imageLink.type}
              />
            ))}
            <img
              src={imageLinks[0].picture}
              alt={`${name} pucture`}
              className={styles.image__picture}
            />
          </picture>
        ) : null}
      </div>
      <div className={styles.description}>{description}</div>
      <a href={link} className={styles.button}>
        Visit Website
      </a>
    </article>
  );
};
