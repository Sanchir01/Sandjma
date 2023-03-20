import axios from 'axios'

axios.defaults.baseURL = 'https://63be7d1df5cfc0949b58980f.mockapi.io'

export const ProductService = {
	async getProduct() {
		const { data } = await axios.get('/item')
		return data
	}
}
