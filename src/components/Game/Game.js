import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { Word } from './Word';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const gridStyle = {
	display: 'grid',
	gridTemplateColumns: '1fr',
	width: '50vh',
	height: '60vh',
	backgroundColor: 'lightgrey',
	borderRadius: '5px',
};

const gameStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '1rem',
};

const formStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',
};

function Game() {
	const [word, setWord] = React.useState('');
	const [list, setList] = React.useState([WORDS[0], WORDS[1], WORDS[2], WORDS[3], WORDS[4], WORDS[5]]);

	function onSubmit(e) {
		e.preventDefault();
		const isAValidWord = WORDS.includes(word.toLocaleUpperCase());
		if (isAValidWord) {
			console.log('word is valid');
		}
		/* 	setList([...list, word]);
		setWord(''); */
	}

	return (
		<div id='game' style={gameStyle}>
			<div id='word' style={gridStyle}>
				{list.map((word, index) => (
					<Word key={index} word={word} />
				))}
			</div>
			<form style={formStyle} onSubmit={onSubmit}>
				<input type='text' id='value' maxLength={5} value={word} onChange={e => setWord(e.target.value)} />
				<button style={{ borderRadius: '1rem', backgroundColor: 'blue', width: 'max-content', padding: '.25rem 1rem' }}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Game;
