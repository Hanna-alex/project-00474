import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'

export const Scrollbar = ({ children, width = '100%', height = '300px' }) => {
	// Функции рендеринга трека и ползунка
	const renderTrackVertical = ({ style, ...props }) => (
		<div
			{...props}
			style={{
				...style,
				position: 'absolute',
				top: 0,
				bottom: 0,
				right: 0,
				width: '8px',
				height: '100%',
				borderRadius: '8px',
				boxShadow: 'inset 0 0 8px rgba(0,0,0,0.2)',
				boxSizing: 'border-box',
			}}
		/>
	)

	const renderThumbVertical = ({ style, ...props }) => (
		<div
			{...props}
			style={{
				...style,
				backgroundColor: 'rgba(178, 172, 178, 0.8)',
				borderRadius: '8px',
				height: '12px',
				cursor: 'pointer',
			}}
		/>
	)

	return (
		<div style={{ width, height, position: 'relative' }}>
			<Scrollbars
				autoHide
				autoHideTimeout={1000}
				autoHideDuration={200}
				renderTrackVertical={renderTrackVertical}
				renderThumbVertical={renderThumbVertical}
			>
				{children}
			</Scrollbars>
		</div>
	)
}
