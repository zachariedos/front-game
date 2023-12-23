import axios from "axios";


const params = new URLSearchParams(window.location.search)

const APIClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8080/",
	headers: {
		'Authorization': `Bearer ${params.get('token')}` //Token passé par l'iFrame
	}
});


export default APIClient
