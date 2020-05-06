import React from 'react'
import styled from 'styled-components'
import image from '../../images/pageLoader.png'

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.background};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Text = styled.span`
	font-size: 1.25rem;
	font-weight: bold;
	text-transform: uppercase;
	color: ${({ theme }) => theme.textColor};
`

const Image = styled.img`
	width: 40%;
	height: auto;
`

function PageLoader() {
	return (
		<Container>
			<Image src={image} alt="loader" />
			<Text>Preparando i popcorn ...</Text>
		</Container>
	)
}

export default PageLoader
