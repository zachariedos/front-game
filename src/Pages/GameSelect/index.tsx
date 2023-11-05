import styles from "../../Styles/GameSelect.module.scss"
import {useTranslation} from "react-i18next";
import GameSelectCard, {Games} from "../../Component/GameSelectCard";

export default function GameSelect() {
	const {t} = useTranslation()
	return <div className={styles.CardContainer}>
		<div className={styles.Cards}>
		<GameSelectCard Game={Games.Quiz}  GameName={t('configuration:game.quiz.name')}/>
		<GameSelectCard Game={Games.Draw}  GameName={t('configuration:game.draw.name')}/>
		<GameSelectCard Game={Games.BlindTest}  GameName={t('configuration:game.blind_test.name')}/>
		</div>
	</div>
}
