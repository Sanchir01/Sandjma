import axios from 'axios'
import { IProduct, OneProduct } from '../types/service.interface'

axios.defaults.baseURL = 'https://63be7d1df5cfc0949b58980f.mockapi.io'

export const ProductService = {
	async getProduct(category: number | string, sortBy: string, order: string) {
		return (
			await axios.get<IProduct[]>(
				`/sanchir?${category}&sortBy=${sortBy}&order=${order}`
			)
		).data
	},
	async getOneProduct(id: string) {
		return (await axios.get<OneProduct>(`/images/${id}`)).data
	}
}
