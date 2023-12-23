import client from "./axios"

/**
 * Penser à export le fichier qui contient les requêtes API dans src/api/index.ts
 */

export async function create(data: {game_type:number}) {
	try {
		const res = await client.post(`${import.meta.env.VITE_API_URL}/game`, data.game_type, {
			method: 'post',
			headers: {
				"Content-Type": "application/json"
			}
		})
		return res.data as {
			room_id: string,
			message: string,
			status: string
		}
	} catch (e: any) {
		throw await e.json()
	}
}

export default {
	create
}
