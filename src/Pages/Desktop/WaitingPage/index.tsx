import styles from "../../../Styles/WaitingPage.module.scss"
import {useTranslation} from "react-i18next";
import GameSelectCard, {Games} from "../../../Component/GameSelectCard";
import QRCode from "react-qr-code";
import {useEffect, useState} from "react";
import md5 from 'md5';
import {WaitingIcon} from "../../../Component/Icons/WaitingIcon";

export default function WaitingPage() {
    const {t} = useTranslation()


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
    const [gameRoomId,setGameRoomId]= useState<string>(md5(new Date().getTime().toString()).substring(0, md5(new Date().getTime().toString()).length / 2))
    const [qrCodeValue,setQrCodeValue]= useState<string>(
        `${import.meta.env.VITE_FRONT_APP_URL}?game_room_id:${gameRoomId}`
    )

    return <div className={styles.Container}>
        <div className={styles.Left}>
            <div className={"text-light-secondary-400 dark:text-dark-secondary-500"}><WaitingIcon/></div>
            <div className={"flex flex-col"}>
                <span
                    className={`${styles.title} text-light-secondary-400 dark:text-dark-secondary-500`}>Mode de jeu</span>
                <GameSelectCard Game={Games.Quiz} GameName={t('configuration:game.quiz.name')}/>
            </div>
        </div>
        <div className={styles.Center}>
            dzada
        </div>
        <div className={styles.Right}>
            <div className={"flex flex-col items-center"}>
                 <span className={`${styles.title} text-light-secondary-400 dark:text-dark-secondary-500`}>
                        {gameRoomId}
                    </span>
                <div className={"w-3/4 flex"}>
                <QRCode value={qrCodeValue} bgColor={"transparent"} fgColor={theme == "light" ? "#6791A4" : "#8D578F"}  />
                </div>
                <div className={`${styles.title} text-light-secondary-400 dark:text-dark-secondary-500`}>
                    <span>6</span>
                    <span>participants</span>
                </div>
            </div>
        </div>
    </div>
}
