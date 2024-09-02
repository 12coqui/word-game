import React from 'react';
import Guess from '../Guess/Guess';

export function GuessResult({ guesses, answer }) {
	const rows = Array.from({ length: 6 }, (_, index) => index);

	return (
		<div className='guess-results'>
			{rows.map(num => {
				return <Guess key={num} className='guess' guess={guesses[num]} answer={answer} />;
			})}
		</div>
	);
}
