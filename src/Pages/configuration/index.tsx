import {useNavigate} from "react-router-dom";
import styles from "../../Styles/Configuration.module.scss"
import {useTranslation} from "react-i18next";
import {ScaleLoader} from "react-spinners";
import api from "../../api";
import {toast} from "react-toastify";
import useUsers from "../../Hooks/useUsers";

export default function Configuration() {
	const navigate = useNavigate()
	const {t} = useTranslation()
	const {
		data: response,
		isLoading,
		isError
	} = useUsers(1)

	return <div className={styles.Container}>
		<div className={styles.Create}>
			<h1 className={styles.Title}>{t("configuration:users.create.title")}</h1>
			<button onClick={() => {
				api.user.create({
					name: "Michel",
					job: "Dev"
				}).then(data => toast.success(t("configuration:users.create.notification.success", {
					name: data.name,
					id: data.id
				})))
			}}>{t("configuration:users.create.action")}</button>
		</div>
		{response && response.data.length > 0 ? <div>
			<h1 className={styles.Title}>{t("configuration:users.update.title", {count: response.data.length})}</h1>
			<div className={styles.ButtonContainer}>
				{response.data.map(user => <button key={`user_button_${user.id}`}
												   onClick={() => {
													   navigate(`/configuration/user/${user.id}`)
												   }}>{t('configuration:users.update.action', {
					user_name: `${user.first_name} ${user.last_name}`
				})}</button>)}
			</div>

		</div> : isLoading ? <ScaleLoader color={"#76A6C7"}/> : <span>{t("configuration:users.empty")}</span>}
	</div>
}
