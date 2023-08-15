import {useParams} from "react-router-dom";
import useApiFetch from "../../../Hooks/useApiFetch";
import {ScaleLoader} from "react-spinners";

type UserCall = {
	data: User,
	support: {
		url: string,
		text: string
	}
}

export type User = {
	id: number,
	email: string,
	first_name: string,
	last_name: string,
	avatar: string
}
export default function UserId() {
	//Permet de récupérer le paramètre passé dans l'URL
	const {user_id} = useParams<{ user_id: string }>()

	const {
		data: response,
		isLoading,
		isError
	} = useApiFetch<UserCall>(`https://reqres.in/api/users/${user_id}`, {externalCall: true})

	return <div>
		{isError && <span>Une erreur est survenue</span>}
		{isLoading && <ScaleLoader color={"#76A6C7"}/>}
		{response && <div>
			<p>Vous êtes en train de modifier
				l'utilisateur {response.data.first_name} {response.data.last_name} [{response.data.id}]</p>
		</div>}
		<button onClick={() => {
			history.back()
		}}>Retour</Button>
	</div>
}
