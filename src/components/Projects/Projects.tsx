import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { ProjectType } from '../../types/Project.type';
import { Project } from '../Project/Project';
import styles from './Projects.module.scss';
import anishiroPicture from '../../assets/images/anishiro.jpg';
import budgetPlannerPicture from '../../assets/images/budget-planner.jpg';
import minnaGenshinPicture from '../../assets/images/minna-genshin.jpg';

interface Props {
    currentSlide?: number;
    setCurrentSlide?: Dispatch<SetStateAction<number>>;
}

export const Projects = (props: Props) => {
    const { currentSlide, setCurrentSlide } = props;

    const projects: ProjectType[] = [
        {
            id: 0,
            name: 'Anishiro',
            imageLink: anishiroPicture,
            description: "It's a web app that can help you to find an anime",
            link: 'https://anishiro.vercel.app/',
        },
        {
            id: 1,
            name: 'Budget Planner',
            imageLink: budgetPlannerPicture,
            description: "It's a web app that can help you to manage your budget",
            link: 'https://budget-planner-six.vercel.app/',
        },
        {
            id: 2,
            name: 'Minna Genshin',
            imageLink: minnaGenshinPicture,
            description: "It's a web app with useful genshin impact tools",
            link: 'https://talgeyou.github.io/minna-genshin',
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
                        id={project.id}
                        name={project.name}
                        imageLink={project.imageLink}
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
