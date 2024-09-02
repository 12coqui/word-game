import React from 'react';
import { FiXCircle } from 'react-icons/fi';

export function Alert({ message, title, closeModal, restartGame, gameStatus }) {
	return (
		<div className={`modal-alert ${gameStatus != 'playing' && gameStatus === 'won' ? 'won' : 'lose'}`}>
			<h2 className='modal-title'>{title}</h2>
			<p className='modal-message'>{message}</p>
			<span className='modal-close-btn' onClick={closeModal}>
				<FiXCircle />
			</span>
			<button className='modal-restart-btn' onClick={restartGame}>
				Restart
			</button>
		</div>
	);
}
