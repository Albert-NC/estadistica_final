import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='page'>
			<header className='header'>
				<h1>Mi primera página con React + Vite</h1>
				<p className='subtitle'>Un ejemplo simple para empezar</p>
				<nav className='nav'>
					<a href='#inicio'>Inicio</a>
					<a href='#acerca'>Acerca</a>
					<a href='#contacto'>Contacto</a>
				</nav>
			</header>

			<main className='main' id='inicio'>
				<section className='card'>
					<h2>¿Qué estoy viendo?</h2>
					<p>
						Esta es una página muy sencilla construida con React. React te
						permite crear componentes (bloques reutilizables) y Vite se encarga
						de arrancar el proyecto rápidamente para que puedas ver los cambios
						al instante.
					</p>
				</section>

				<section className='card' id='acerca'>
					<h2>Contador interactivo</h2>
					<p>
						A continuación tienes un botón que suma 1 cada vez que haces clic.
						Esto demuestra cómo React maneja el estado (datos que cambian con el
						tiempo).
					</p>
					<button className='btn' onClick={() => setCount(n => n + 1)}>
						Has hecho clic {count} {count === 1 ? 'vez' : 'veces'}
					</button>
				</section>

				<section className='card' id='contacto'>
					<h2>¿Dónde cambio esto?</h2>
					<p>
						Edita el archivo <code>src/App.tsx</code> para modificar el
						contenido de esta página. Guarda y verás los cambios al instante.
					</p>
				</section>
			</main>

			<footer className='footer'>
				<small>
					Hecho con ♥ usando React y Vite. Aprende más en{' '}
					<a href='https://react.dev' target='_blank' rel='noreferrer'>
						react.dev
					</a>{' '}
					y{' '}
					<a href='https://vite.dev' target='_blank' rel='noreferrer'>
						vite.dev
					</a>
					.
				</small>
			</footer>
		</div>
	);
}

export default App;
