import {HomeIcon,} from '@heroicons/react/24/outline'
import classNames from "classnames";
import {CustomRoutes} from "../routes";
import {useLocation, useNavigate} from "react-router-dom";
import {WrenchIcon} from "@heroicons/react/24/solid";
import styles from "./index.module.scss"

//Mettre les liens des pages ici
const navigation = [
	{name: 'Accueil', path: '/', icon: HomeIcon},
	{name: 'Configuration', path: '/configuration', icon: WrenchIcon}
]

export default function Index() {
	const navigate = useNavigate()
	const location = useLocation();

	return (
		<div className={styles.Container}>
			<>
				<ul role="list" className={styles.LinkList}>
					{navigation.map((item) => (
						<li key={item.name}>
							<a
								onClick={() => {
									navigate(item.path)
								}}
								className={classNames(
									styles.Link,
									item.path == location.pathname && styles.LinkActive
								)}
							>
								<item.icon
									className={styles.LinkIcon}
									aria-hidden="true"
								/>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</>
			<div className={styles.Page}>
				<CustomRoutes/>
			</div>
		</div>
	)
}
