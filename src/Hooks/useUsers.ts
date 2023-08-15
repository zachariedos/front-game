import {KeyedMutator, SWRConfiguration} from 'swr';
import useApiFetch from "./useApiFetch";
import {User} from "../Pages/configuration/user/[user_id]";


type UserListCall = {
	page: number,
	per_page: number,
	total: number,
	total_pages: number,
	data: User[]
}
export default function useUsers(
	page: number,
	options: SWRConfiguration & { fetch?: boolean, externalCall?: boolean } = {}
): {
	data?: UserListCall,
	isLoading: boolean,
	isError: any,
	mutate: KeyedMutator<any>
} {

	const url = `https://reqres.in/api/users?page=${page}`

	const {data, isLoading, isError, mutate} = useApiFetch<UserListCall>(url)

	return {
		data,
		isLoading,
		isError,
		mutate
	};
}
