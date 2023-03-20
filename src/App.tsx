import './App.css'
import Catalog from './pages/catalog'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Footer from './pages/Footer'
import OneItemGet from './pages/FullItems'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/' element={<Main />} />
				<Route path='/items/:id' element={<OneItemGet />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
