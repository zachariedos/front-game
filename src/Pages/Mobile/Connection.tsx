import styles from "../../Styles/Mobile/Connection.module.scss"
import {useTranslation} from "react-i18next";
import useDarkSide from "../../Hooks/useDarkSide";
import {useEffect, useState} from "react";

export default function Connection() {

    const [theme, setTheme] = useState<string>(localStorage?.theme);

    useEffect(() => {
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    setTheme(document.documentElement.classList.value);
                }
            }
        });

        observer.observe(document.documentElement, {attributes: true});

        return () => {
            observer.disconnect();
        };
    });

    const {t} = useTranslation()

    return <div className={styles.PageContainer}>
        <div>
            <div className={" h-80 w-80 rounded-xl relative"}>

                <div id={"qr_container_reader"} className={styles.qrContainer}></div>
                <div id={"qr_container_border"} className={`
            ${theme === "light" ? styles.QrScannerContainerLight : styles.QrScannerContainerDark} 
            ${styles.qrContainer}
        `}>
                </div>
            </div>
        </div>
    </div>
}
