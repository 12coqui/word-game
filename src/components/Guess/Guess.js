import React from 'react';
import { Cell } from '../Cell/Cell';
import { checkGuess } from '../../game-helpers';
function Guess({ guess, answer }) {
	const cols = Array.from({ length: 5 }, (_, index) => index);

	const result = checkGuess(guess, answer);
	return (
		<div className='guess'>
			{cols.map(num => (
				<Cell
					key={num}
					value={result ? result[num].letter : undefined}
					status={result ? result[num].status : undefined}
				/>
			))}
		</div>
	);
}

export default Guess;
