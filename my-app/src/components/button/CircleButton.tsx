import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
	onClick: () => void; // 클릭 이벤트시 실행할 함수
	children: ReactNode;
}

export function CircleButton({onClick, children}: Props) {
	return (
		<StyledButton onClick={onClick}>
			{children}
		</StyledButton>
	)
}

const StyledButton = styled.button`

`;
