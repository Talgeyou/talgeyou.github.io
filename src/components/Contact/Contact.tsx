import React from 'react';
import styles from './Contact.module.scss';

interface Props {
    id: number;
    name: string;
    link?: string;
    icon?: React.ReactNode;
}

export const Contact = (props: Props) => {
    const { name, link, icon } = props;
    return (
        <a href={link} rel={'noreferrer'} target={'_blank'}>
            <div className={styles.wrapper}>
                <div className={styles.icon}>{icon}</div>

                <div className={styles.text}>{name}</div>
            </div>
        </a>
    );
};
