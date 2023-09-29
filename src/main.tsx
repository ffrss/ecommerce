import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/pages/home/Home.tsx'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Cart from './components/pages/cart/Cart.tsx'
import Product from './components/pages/product/Product.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/product/:id' element={<Product />} />
			</Routes>
		</Router>
	</QueryClientProvider>
)
