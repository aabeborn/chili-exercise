// import React from 'react';
import styled from 'styled-components'

const Skeleton = styled.span`
	position: relative;
	background-color: ${({ color }) => color ?? '#eee'};
	background-image: linear-gradient(
		90deg,
		${({ theme }) => theme?.skeletonColor ?? '#eee'},
		${({ theme }) => theme?.skeletonHighlightColor ?? '#dddddd'},
		${({ theme }) => theme?.skeletonColor ?? '#eee'}
	);
	background-repeat: no-repeat;
	background-size: 15rem 100%;
	display: inline-block;
	animation: skeletonAnimation 1s ease-in-out infinite;
	border-radius: 0.25rem;
	@keyframes skeletonAnimation {
		0% {
			background-position: -15rem 0;
		}
		100% {
			background-position: calc(15rem + 100%) 0;
		}
	}
`

export default Skeleton
