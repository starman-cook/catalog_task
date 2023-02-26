import axios, {
	AxiosInstance
} from 'axios'

export const instance: AxiosInstance = axios.create({
	withCredentials: false,
	headers: { 'Content-Type': 'application/json' },
	baseURL: import.meta.env.VITE_BASE_URL
})