import { CgSpinnerTwo } from 'react-icons/cg';
import styles from './Spinner.module.css';

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <CgSpinnerTwo className={styles.spinning} size={60} />
        </div>
    )
}
