import styles from "../../../Styles/WaitingPage.module.scss"
import {useTranslation} from "react-i18next";
import GameSelectCard from "../../../Component/GameSelectCard";
import QRCode from "react-qr-code";
import React, {useMemo} from "react";
import useGame from "../../../Hooks/useGame";
import {Hourglass, ThreeCircles} from "react-loader-spinner";
import {motion} from "framer-motion";
import {useParams} from "react-router-dom";


export default function WaitingPage() {
    const {t} = useTranslation()
    const {room_id} = useParams();
    const qrCodeValue = useMemo(() => {
        return `${import.meta.env.VITE_FRONT_APP_URL}?game_room_id=${room_id}`
    }, [room_id])


    const {
        data: room,
        isLoading: room_isLoading,
        isError: room_isError,
        mutate: room_mutate
    } = useGame(room_id??"")

    return <div className={styles.Container}>
        <div className={styles.Left}>
            <motion.div
                className={"text-light-secondary-400 h-1/4 w-full flex items-center justify-center dark:text-dark-secondary-500"}
                initial={{opacity: 0, y: 5}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: .5}}
            >
                <Hourglass
                    colors={["currentColor", "currentColor"]}
                    height={"75%"}
                    width={"75%"}
                />
            </motion.div>
            <div className={"flex flex-1 flex-col"}>
                <span
                    className={`${styles.title} text-light-secondary-400 dark:text-dark-secondary-500`}>Mode de jeu</span>
                {
                    room_isLoading ?
                        <div
                            className={"text-light-secondary-400 h-full w-full flex items-center justify-center dark:text-dark-secondary-500"}
                        >
                            <ThreeCircles
                                color={"currentColor"}
                                height={"75%"}
                                width={"75%"}
                            />
                        </div>
                        :
                        room?.game_type &&
                        <GameSelectCard Game={room.game_type}
                                        GameName={t(`configuration:game.${room.game_type}.name`)}/>
                }
            </div>
        </div>
        <div className={styles.Center}>
            dzada
        </div>
        <motion.div className={styles.Right}
                    initial={{opacity: 0, y: 5}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}>
            <div className={"flex flex-col items-center"}>
                 <span className={`${styles.title} text-light-secondary-400 dark:text-dark-secondary-500`}>
                        {room_id}
                    </span>
                <div className={"w-3/4 flex text-light-secondary-500 dark:text-dark-secondary-500"}>
                    <QRCode value={qrCodeValue} bgColor={"transparent"}
                            fgColor={"currentColor"}/>
                </div>
                <div className={`${styles.title} text-light-secondary-400 dark:text-dark-secondary-500`}>
                    <span>6</span>
                    <span>participants</span>
                </div>
            </div>
        </motion.div>
    </div>
}
