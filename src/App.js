import React from 'react';
import './App.css';
import { Route, Link } from 'wouter';
import Home from './components/Home/Home';
import SearchResults from './pages/SearchResults';

function App() {
	return (
		<div className="App">
			<section className="App-content">
				<h1>
					<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
						LIFEGIF
					</Link>
				</h1>
				<Route path="/" component={Home} />
				<Route path="/gifs/:keyword" component={SearchResults} />
			</section>
		</div>
	);
}

export default App;
