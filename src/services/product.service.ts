import axios from 'axios'
import { IProduct, IProductResponse } from '../types/product.interface'

axios.defaults.baseURL = 'https://dummyjson.com/products'

export const ProductService = {
	async getProducts() {
		const response = await axios.get<IProductResponse>('/', {
			params: {
				limit: 5
			}
		})
		return response.data
	},

	async getProductById(id: string) {
		const response = await axios.get<IProduct>(`/${id}`)
		return response.data
	}
}
