import client from "./axios"

/**
 * Penser à export le fichier qui contient les requêtes API dans src/api/index.ts
 */

export async function create(data: any) {
	try {
		const res = await client.post('https://reqres.in/api/users', data, {
			method: 'post',
			headers: {
				"Content-Type": "application/json"
			}
		})
		return res.data
	} catch (e: any) {
		throw await e.json()
	}
}

export default {
	create
}
