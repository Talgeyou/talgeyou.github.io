import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styles from './Hero.module.scss';

interface Props {
    currentSlide?: number;
    setCurrentSlide?: Dispatch<SetStateAction<number>>;
}

export const Hero = (props: Props) => {
    const { currentSlide, setCurrentSlide } = props;

    const handleButtonClick = useCallback(() => {
        if (setCurrentSlide) {
            setCurrentSlide(1);
        }
    }, [setCurrentSlide]);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Ilya "Talge" Derevyashkin</h1>
            <button className={styles.button} onClick={handleButtonClick}>
                {"Let's meet :)"}
            </button>
        </div>
    );
};
