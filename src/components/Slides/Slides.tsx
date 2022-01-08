import React, { useState } from 'react';
import { SlideType } from '../../types/Slide.type';
import { Contacts } from '../Contacts/Contacts';
import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Slide } from '../Slide/Slide';
import styles from './Slides.module.scss';

interface Props {}

export const Slides = (props: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: SlideType[] = [
        {
            id: 0,
            backgroundColor: '#fafafa',
            textColor: '#000000',
            name: 'hero',
            children: <Hero />,
        },
        {
            id: 1,
            backgroundColor: '#1976d2',
            textColor: '#ffffff',
            name: 'projects',
            children: <Projects />,
        },
        {
            id: 2,
            backgroundColor: '#fafafa',
            textColor: '#000000',
            name: 'contacts',
            children: <Contacts />,
        },
    ];

    return (
        <div
            className={styles.wrapper}
            style={{ transform: `translateY(calc(-100vh * ${currentSlide}))` }}
        >
            {slides.map((slide: SlideType) => (
                <Slide
                    id={slide.id}
                    key={slide.id}
                    backgroundColor={slide.backgroundColor}
                    textColor={slide.textColor}
                    name={slide.name}
                    children={slide.children}
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                />
            ))}
        </div>
    );
};
