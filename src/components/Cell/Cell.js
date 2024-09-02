import React from 'react';

export function Cell({ value, status }) {
	return <span className={value ? `cell ${status}` : 'cell'}>{value ? value : undefined}</span>;
}
