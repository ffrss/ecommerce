import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { ProductService } from '../../../services/product.service'
import Button from '../../ui/button/Button'
import { Gallery } from './gallery/Gallery'

const Product: FC = () => {
	const params = useParams()
	const { data: product, isLoading } = useQuery(['product', params.id], () =>
		ProductService.getProductById(params.id || '')
	)

	if (!product) {
		return (
			<Layout>
				<div>Product not found!</div>
			</Layout>
		)
	}

	return (
		<Layout>
			{isLoading && <div className='text-blue-400 text-2xl'>Loading... </div>}

			<Gallery images={product?.images} />

			<h1 className='text-3xl mb-3 mt-4 font-bold'>{product.title}</h1>
			<div className='text-lg'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0
				}).format(product.price)}
			</div>

			<Button>Add to cart</Button>
		</Layout>
	)
}

export default Product
