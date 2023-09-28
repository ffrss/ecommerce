import { FC } from 'react'
import { IProduct } from '../../../types/product.interface'
import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<div
				style={{ backgroundImage: `url(${product.thumbnail})` }}
				className={styles.image}
			/>
			<div className={styles.heading}>{product.title}</div>
			<div className={styles.price}>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					maximumFractionDigits: 0
				}).format(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
