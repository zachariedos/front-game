import {useEffect, useState} from 'react';
import axios from 'axios';
import client from '../api/axios'
import useSWR, {KeyedMutator, SWRConfiguration} from 'swr';

/**
 * Cette fonction est utilisée pour effectuer une requête API avec SWR.
 *
 * @param {string} url - L'URL de l'API à appeler.
 * @param {object} options - Les options de configuration pour SWR et la requête.
 * @param {boolean} options.fetch - Indique si la requête doit être effectuée immédiatement. Par défaut, la valeur est true.
 * @param {boolean} options.externalCall - Indique si la requête doit être effectuée sur une API interne (ex : Api Softy) ou sur une API externe (ex : Pôle Emploi).
 * @returns {object} Un objet contenant les données de la réponse, l'état de chargement, les erreurs et une fonction de mutation.
 *
 * @property {any} data - Les données de la réponse de l'API.
 * @property {boolean} isLoading - Indique si la requête est en cours de chargement.
 * @property {any} isError - Les erreurs de la requête.
 * @property {function} mutate - Une fonction de mutation pour rafraîchir les données manuellement.
 */
export default function useApiFetch<T>(
	url: string,
	options: SWRConfiguration & { fetch?: boolean, externalCall?: boolean } = {}
): {
	data?: T,
	isLoading: boolean,
	isError: any,
	mutate: KeyedMutator<any>
} {
	const [fetch, setFetch] = useState(options.fetch ?? true);

	options = Object.assign({refreshInterval: 0}, options);

	const fetcher = async (url: string) => {
		try {
			const response = options.externalCall ? await axios.get(url) : await client.get(url);
			return response.data;
		} catch (error: any) {
			throw error.response.data;
		}
	};

	const {data, error, mutate} = useSWR(fetch ? url : null, fetcher, options);

	useEffect(() => {
		setFetch(options.fetch ?? true);
	}, [options.fetch]);

	return {
		data,
		isLoading: !error && !data,
		isError: error,
		mutate
	};
}
