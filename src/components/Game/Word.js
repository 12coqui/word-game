import React from 'react';

const rowStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '10vh',
	width: '100%',
	border: '1px solid black',
};

const letterStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	width: '20%',
	border: '1px solid black',
};

export function Word({ word }) {
	console.log(word);
	return (
		<div style={rowStyle}>
			{word.split('').map((letter, index) => (
				<div key={index} style={letterStyle}>
					{letter}
				</div>
			))}
		</div>
	);
}
