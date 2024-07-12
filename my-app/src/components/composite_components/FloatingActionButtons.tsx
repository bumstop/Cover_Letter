import React from 'react'
import styled from 'styled-components'
import CopyEmailButton from '../button/CopyEmailButton';
import ScrollTopButton from '../button/ScrollTopButton';

export default function FloatingActionButtons() {
	return (
		<FloatingActionButtonsContainer>
			<CopyEmailButton size='l' theme='bright'/>
			<ScrollTopButton size='l' theme='bright'/>
		</FloatingActionButtonsContainer>
	)
}

const FloatingActionButtonsContainer = styled.div`
	position: fixed;
	bottom: 12px;
	right: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
