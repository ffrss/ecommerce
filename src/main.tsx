import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/pages/home/Home.tsx'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<Home />
	</QueryClientProvider>
)
