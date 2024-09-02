import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { Input } from '../Input/Input';
import { GuessResult } from '../GuessResult/GuessResult';
import { Modal } from '../Modal/Modal';

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = React.useState('');
	const [guesses, setGuesses] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('playing');
	const [modalStatus, setModalStatus] = React.useState('hidden');

	console.log({ gameStatus });

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === 'Escape') {
				restartGame();
			}
		}

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	useEffect(() => {
		if (gameStatus === 'won' || gameStatus === 'lost') {
			setModalStatus('visible');
		}
	}, [gameStatus]);

	function closeModal() {
		setModalStatus('hidden');
	}
	function restartGame() {
		setGuess('');
		setGuesses([]);
		setGameStatus('playing');
		setModalStatus('hidden');
		answer = sample(WORDS);
	}

	return (
		<>
			<GuessResult guesses={guesses} answer={answer} />
			<Input
				guess={guess}
				setGuess={setGuess}
				guesses={guesses}
				setGuesses={setGuesses}
				gameStatus={gameStatus}
				setGameStatus={setGameStatus}
				answer={answer}
			/>
			{modalStatus === 'visible' && (
				<Modal
					restartGame={restartGame}
					closeModal={closeModal}
					title={gameStatus === 'won' ? 'Congratulations!' : 'Game Over'}
					message={
						gameStatus === 'won'
							? `You won in ${guesses} ${guesses != 1 ? 'guesses' : 'guess'}!`
							: `You lost! The correct answer was ${answer}.`
					}
					gameStatus={gameStatus}
				/>
			)}
		</>
	);
}

export default Game;
