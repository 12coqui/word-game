import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

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

	function handleOnChange(event) {
		setPossibleGuess(event.target.value.toUpperCase());
	}

	function handleKeyPress(input) {
		if (input === '{bksp}') {
			setPossibleGuess(prev => prev.slice(0, -1));
		} else if (input === '{enter}') {
			handleSubmit({ preventDefault: () => {} });
		} else {
			setPossibleGuess(prev => (prev + input).toUpperCase());
		}
	}
	return (
		<>
			<form className='guess-input-wrapper' onSubmit={handleSubmit}>
				<label htmlFor='guess-input'>Enter guess:</label>
				<input
					id='guess-input'
					type='text'
					value={possibleGuess}
					onChange={handleOnChange}
					maxLength={5}
					minLength={5}
					pattern='[a-zA-Z]{5}'
					title='Enter 5 letters'
					disabled={gameStatus !== 'playing'}
				/>
			</form>
			<Keyboard
				onKeyPress={handleKeyPress}
				layout={{
					default: ['Q W E R T Y U I O P {bksp}', 'A S D F G H J K L {enter}', 'Z X C V B N M'],
				}}
				display={{
					'{bksp}': 'Delete',
					'{enter}': 'Enter',
				}}
			/>
		</>
	);
}
