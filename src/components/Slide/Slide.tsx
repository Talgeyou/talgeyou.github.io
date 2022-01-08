import React, { Dispatch, SetStateAction } from 'react';
import styles from './Slide.module.scss';

interface Props {
    id: number;
    name: string;
    backgroundColor: string;
    textColor: string;
    children?: React.ReactNode;
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
}

export const Slide = (props: Props) => {
    const { id, name, children, backgroundColor, textColor, setCurrentSlide } = props;

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { id, setCurrentSlide });
        }
    });

    return (
        <section
            id={name}
            className={styles.wrapper}
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <div className={styles.container}>{childrenWithProps}</div>
        </section>
    );
};
