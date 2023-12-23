import Error404 from "../Component/Error404"
import styles from "../Styles/Error404.module.scss"
import {useTranslation} from "react-i18next";

export default function Page404() {
	const {t} = useTranslation()
	return <div className={styles.Error}>
		<Error404/>
		<p>{t('common:error.404.message')}</p>
		<p>{t('common:error.404.submessage')}</p>
	</div>
}
