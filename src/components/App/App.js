import Game from '../Game/Game';
import Header from '../Header/Header';
import React from 'react';
export function App() {
	return (
		<div className='wrapper'>
			<Header />

			<div className='game-wrapper'>
				<Game />
			</div>
		</div>
	);
}
