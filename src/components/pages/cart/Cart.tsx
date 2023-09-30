import { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useActions'
import styles from './Cart.module.scss'
import Button from '../../ui/button/Button'

const Cart: FC = () => {
	const { items } = useTypedSelector(state => state.cart)

	const { removeFromCart } = useActions()

	return (
		<Layout title='Cart'>
			{items.length ? (
				<>
					<div className={styles.cart}>
						{items.map(product => (
							<div key={product.id}>
								<span className={'font-bold'}>{product.title}</span>
								<span>{product.price}$</span>
								<button
									className={'text-red-600'}
									onClick={() => removeFromCart(product.id)}
								>
									Remove
								</button>
							</div>
						))}
					</div>
					<Button>Checkout</Button>
				</>
			) : (
				<div>Cart is empty!</div>
			)}
		</Layout>
	)
}

export default Cart
