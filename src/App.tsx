import './App.css'
import Catalog from './pages/catalog'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Footer from './pages/Footer'
import Header from './pages/Main/components/Header-main/Header'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/Catalog' element={<Catalog />} />
				<Route path='/' element={<Main />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
