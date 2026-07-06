import { TOTAL } from './data/pokedex'
import './App.css'

export default function App() {
	return (
		<div className="app">
			<header className="masthead">
				<div className="masthead__titles">
					<h1 className="masthead__title">Pokédex</h1>
					<span className="masthead__eyebrow">Vol. I · Field guide</span>
				</div>
				<p className="masthead__subtitle">
					Selected entries from nine generations of the National Pokédex.
				</p>
			</header>

			<main className="record">
				<p className="record__placeholder">
					{TOTAL} species on record. Grid coming next in WP2.
				</p>
			</main>

			<footer className="colophon">
				<span className="colophon__mark">POKÉDEX — VOL. I</span>
				<span className="colophon__mark colophon__mark--end">
					DATA AFTER POKEAPI · {TOTAL} ENTRIES
				</span>
			</footer>
		</div>
	)
}
