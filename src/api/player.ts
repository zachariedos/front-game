import client from "./axios"

/**
 * Penser à export le fichier qui contient les requêtes API dans src/api/index.ts
 */

export async function createOrUpdate(data: {
    name: string,
    room_id: string,
    avatar: string,
    id?: string,
    ready: boolean
}) {
    try {
        const res = await client.post(`${import.meta.env.VITE_API_URL}/player`, data, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            }
        })
        return {
            status: res.status as number,
            data: res.data as {
                player_id: number
            }
        }
    } catch (e: any) {
        throw await e.json()
    }
}

export async function get(player_id: string) {
    try {
        const res = await client.get(`${import.meta.env.VITE_API_URL}/player/${player_id}`)
        return res.data as {
            player_id: string,
            name: string,
            room_id: string,
            avatar: string,
            ready: boolean
        }
    } catch (e: any) {
        throw await e.json()
    }
}

export async function updateScore(player_id: string, score: number) {
    try {
        const res = await client.put(`${import.meta.env.VITE_API_URL}/player/${player_id}`, {score})
        return res.data as {
            player_id: string,
            name: string,
            room_id: string,
            avatar: string
        }
    } catch (e: any) {
        throw await e.json()
    }
}

export default {
    createOrUpdate,
    get,
    updateScore
}
