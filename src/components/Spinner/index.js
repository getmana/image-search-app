import BeatLoader from 'react-spinners/BeatLoader';
import styles from './Spinner.module.css';

export const Spinner = () => (
    <div className={styles.spinner}>
        <BeatLoader size={15} margin={2} color="#69f0ae" />
    </div>
);
