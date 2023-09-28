import axios from 'axios'
import { IProductResponse } from '../types/product.interface'

axios.defaults.baseURL = 'https://dummyjson.com'

export const ProductService = {
	async getProducts() {
		const response = await axios.get<IProductResponse>('/products', {
			params: {
				limit: 5
			}
		})
		return response.data
	}
}
