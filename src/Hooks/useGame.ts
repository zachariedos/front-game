import {KeyedMutator, SWRConfiguration} from 'swr';
import useApiFetch from "./useApiFetch";


type GameData = any
export default function useGame(
    game_id: string,
    options: SWRConfiguration & { fetch?: boolean, externalCall?: boolean } = {}
): {
    data?: GameData,
    isLoading: boolean,
    isError: any,
    mutate: KeyedMutator<any>
} {

    const url = `${import.meta.env.VITE_API_URL}/game/${game_id}`

    const {data, isLoading, isError, mutate} = useApiFetch<GameData>(url)

    return {
        data,
        isLoading,
        isError,
        mutate
    };
}
