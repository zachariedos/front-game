import styles from './index.module.scss'
import React from 'react';
import GamesImages from "../GamesImages";
import {motion} from "framer-motion";

export enum Games {
    Quiz,
    Draw,
    BlindTest
}

type props = {
    Game: Games
    GameName: string,
    onClick?: (event: any) => void
}

export default function GameSelectCard(props: props) {
    return (
        <motion.div
            className={`${styles.Card} ${props.onClick && styles.Card_hover} bg-light-secondary dark:bg-dark-secondary even:bg-light-primary even:dark:bg-dark-primary`}
            onClick={props.onClick}
            initial={{opacity: 0, y: 5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: .5}}
        >
            <div className={styles.Logo}>
                <GamesImages game_type_id={props.Game}/>
            </div>
            <div className={`${styles.GameName}`}>
                <span>{props.GameName}</span>
            </div>
        </motion.div>
    );
}