import {useEffect, useState} from 'react';
import useDarkSide from '../../Hooks/useDarkSide';
import styles from './index.module.scss'

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(localStorage.theme != "light");

    useEffect(() => {
        if(!localStorage.getItem('theme')) {
            toggleDarkMode()
        }
    }, []);

    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };

    return (
        <div className={`${styles.toggleWrapper}`}>
            <input type="checkbox" className={`${styles.dn}`} checked={darkSide??true} onChange={(e)=>{
                setDarkSide(prevState => !prevState);
                toggleDarkMode()
            }} id="dn"/>
            <label htmlFor="dn" className={`${styles.toggle}`}>
        <span className={`${styles.toggle__handler}`}>
            <span className={`${styles.crater} ${styles.crater1}`}></span>
            <span className={`${styles.crater} ${styles.crater2}`}></span>
            <span className={`${styles.crater} ${styles.crater3}`}></span>
        </span>
                <span className={`${styles.star} ${styles.star1}`}></span>
                <span className={`${styles.star} ${styles.star2}`}></span>
                <span className={`${styles.star} ${styles.star3}`}></span>
                <span className={`${styles.star} ${styles.star4}`}></span>
                <span className={`${styles.star} ${styles.star5}`}></span>
                <span className={`${styles.star} ${styles.star6}`}></span>
            </label>
        </div>
    );
}