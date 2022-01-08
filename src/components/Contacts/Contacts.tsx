import { faGithub, faTelegram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { ContactType } from '../../types/Contact.type';
import { Contact } from '../Contact/Contact';
import styles from './Contacts.module.scss';

interface Props {
    currentSlide?: number;
    setCurrentSlide?: Dispatch<SetStateAction<number>>;
}

export const Contacts = (props: Props) => {
    const { currentSlide, setCurrentSlide } = props;

    const contacts: ContactType[] = [
        {
            id: 0,
            name: 'Telegram',
            link: 'https://t.me/otalge',
            icon: (
                <FontAwesomeIcon icon={faTelegramPlane} size={'3x'} fixedWidth color={'#fafafa'} />
            ),
        },
        {
            id: 1,
            name: 'GitHub',
            link: 'https://github.com/Talgeyou',
            icon: <FontAwesomeIcon icon={faGithub} size={'3x'} fixedWidth color={'#fafafa'} />,
        },
    ];

    const handleButtonClick = useCallback(() => {
        if (setCurrentSlide) {
            setCurrentSlide(1);
        }
    }, [setCurrentSlide]);

    return (
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={handleButtonClick}>
                Back to the projects
            </button>
            <h1 className={styles.title}>My Contacts</h1>
            <div className={styles.contacts}>
                {contacts.map((contact: ContactType) => (
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        link={contact.link}
                        icon={contact.icon}
                    />
                ))}
            </div>
        </div>
    );
};
