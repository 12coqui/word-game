import React from 'react';
import { Alert } from '../Alert/Alert';

export function Modal({ restartGame, closeModal, title, message, gameStatus }) {
	return (
		<aside className='modal'>
			<Alert
				restartGame={restartGame}
				closeModal={closeModal}
				title={title}
				message={message}
				gameStatus={gameStatus}
			/>
		</aside>
	);
}
