import styles from "../../Styles/GameSelect.module.scss"
import {useTranslation} from "react-i18next";
import GameSelectCard, {Games} from "../../Component/GameSelectCard";

export default function GameSelect() {
	const {t} = useTranslation()
	return <div className={styles.CardContainer}>
		<div className={styles.Cards}>
		<GameSelectCard Game={Games.Quiz}  GameName={t('Game.Name.Quiz')}/>
		<GameSelectCard Game={Games.Draw}  GameName={t('Game.Name.Draw')}/>
		<GameSelectCard Game={Games.BlindTest}  GameName={t('Game.Name.BlindTest')}/>
		</div>
	</div>
}
