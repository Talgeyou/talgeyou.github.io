import { Slides } from '../Slides/Slides';
import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <Slides />
        </div>
    );
};
