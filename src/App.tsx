import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<div className='app-container'>
				<Header />
				<main className='app-content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
