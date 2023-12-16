import styles from "../../../Styles/GameSelect.module.scss"
import {useTranslation} from "react-i18next";
import GameSelectCard, {Games} from "../../../Component/GameSelectCard";
import {useNavigate} from "react-router-dom";
import api from "../../../api";

export default function GameSelect() {
    const {t} = useTranslation()

    return <div className={styles.CardContainer}>
        <div className={styles.Cards}>
            <GameSelectCard Game={Games.Quiz} GameName={t('configuration:game.quiz.name')}
                            onClick={() => {
                                console.log(Games.Draw)
                            }}
            />
            <GameSelectCard Game={Games.Draw} GameName={t('configuration:game.draw.name')}
                            onClick={() => {
                                api.game.create({
                                    game_type: 2
                                }).then((res) => {
                                    console.log(res.room_id)
                                })
                            }}/>
            <GameSelectCard Game={Games.BlindTest} GameName={t('configuration:game.blind_test.name')}
                            onClick={() => {
                                console.log(Games.BlindTest)
                            }}/>
        </div>
    </div>
}
