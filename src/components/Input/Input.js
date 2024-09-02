import React from 'react';

export function Input({ guesses, setGuesses, gameStatus, setGameStatus, answer, setModalStatus }) {
	const [possibleGuess, setPossibleGuess] = React.useState('');
	function handleSubmit(event) {
		event.preventDefault();
		setGuesses([...guesses, possibleGuess]);
		setPossibleGuess('');
		if (answer === possibleGuess) {
			setGameStatus('won');
		} else if (guesses.length >= 5) {
			setGameStatus('lost');
		}
	}

	function onChange(event) {
		setPossibleGuess(event.target.value.toUpperCase());
	}

	return (
		<form className='guess-input-wrapper' onSubmit={handleSubmit}>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				id='guess-input'
				type='text'
				value={possibleGuess}
				onChange={onChange}
				maxLength={5}
				minLength={5}
				pattern='[a-zA-Z]{5}'
				title='Enter 5 letters'
			/>
			<button type='submit' disabled={gameStatus !== 'playing'}>
				Submit
			</button>
		</form>
	);
}
