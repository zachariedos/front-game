import styles from './index.module.scss'
import Switcher from "../Switcher";

export default function Topbar() {

    return (
        <div className={`${styles.topBar}`}>
            <Switcher/>
        </div>
    );
}