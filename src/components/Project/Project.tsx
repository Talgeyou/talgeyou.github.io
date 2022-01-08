import React from 'react';
import styles from './Project.module.scss';

interface Props {
    id: number;
    name: string;
    imageLink?: string;
    description: string;
    link?: string;
}

export const Project = (props: Props) => {
    const { id, name, imageLink, description, link } = props;

    return (
        <article id={id.toString()} className={styles.wrapper}>
            <h2 className={styles.title}>{name}</h2>
            <div className={styles.image}>
                <img src={imageLink} alt={`${name} pucture`} className={styles.image__picture} />
            </div>
            <div className={styles.description}>{description}</div>
            <a href={link} className={styles.button}>
                Visit Website
            </a>
        </article>
    );
};
