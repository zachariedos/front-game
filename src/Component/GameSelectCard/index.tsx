import {useEffect, useState} from 'react';
import LightQuiz from '../../assets/Games/light/Quiz.svg';
import LightDraw from '../../assets/Games/light/Draw.svg';
import LightBlindTest from '../../assets/Games/light/BlindTest.svg';
import DarkQuiz from '../../assets/Games/dark/Quiz.svg';
import DarkDraw from '../../assets/Games/dark/Draw.svg';
import DarkBlindTest from '../../assets/Games/dark/BlindTest.svg';
import styles from './index.module.scss'
import Quiz from "../GamesImages/Quiz";
import Draw from "../GamesImages/Draw";
import BlindTest from "../GamesImages/BlindTest";


export enum Games {
    Quiz,
    Draw,
    BlindTest

}
type props = {
    Game:Games
    GameName:string
}

export default function GameSelectCard(props: props) {
    return (
        <div className={`${styles.Card} bg-light-secondary dark:bg-dark-secondary even:bg-light-primary even:dark:bg-dark-primary`}>
            <div className={styles.Logo}>
            {props.Game === Games.Quiz &&
                <Quiz />
            }
            {props.Game === Games.Draw &&
                <Draw />
            }
            {props.Game === Games.BlindTest &&
                <BlindTest />
            }
            </div>
            <div className={`${styles.GameName}`}>
                <span>{props.GameName}</span>
            </div>
        </div>
    );
}