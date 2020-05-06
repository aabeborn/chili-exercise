import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skeleton from '../Skeleton'

const Container = styled.div`
	position: relative;
	display: block;
	white-space: nowrap;
	padding: 1rem;
	height: 20%;
	min-width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	& :not(:last-child) {
		margin-right: 1rem;
	}
`

const FilmLoader = styled(Skeleton)`
	height: 100%;
	width: 20%;

	@media screen and (max-width: 48em) {
		width: 60%;
	}

	@media screen and (max-width: 68em) {
		width: 40%;
	}
`

const Film = styled.div`
	height: 100%;
	width: 20%;
	display: inline-block;
	position: relative;
	background: ${({ image }) => `url(${image})`};
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	text-align: center;

	&:hover > *,
	&:focus > * {
		transform: translateY(0%);
	}

	@media screen and (max-width: 48em) {
		width: 60%;
	}

	@media screen and (max-width: 68em) {
		width: 40%;
	}
`

const FilmTitle = styled.div`
	padding: 2rem;
	width: 100%;
	text-transform: uppercase;
	font-size: 1rem;
	position: absolute;
	bottom: 0;
	left: 0;
	color: ${({ theme }) => theme.textColor};
	background: ${({ theme }) => `${theme.background}98`};
	backdrop-filter: blur(5px);
	white-space: pre-wrap;
	transform: translateY(100%);
`

function FilmsList({ isLoading, films, filmChange }) {
	const renderSkeleton = React.useCallback(() => {
		const items = []
		for (let i = 0; i < 5; i++)
			items.push(<FilmLoader key={`loader${i}`} />)
		return items
	}, [])

	const renderItems = React.useCallback(() => {
		const items = []
		for (let i = 0; i < films.length; i++)
			items.push(
				<Film
					key={`${films[i].id}`}
					image={films[i].backdropUrl}
					onClick={() => filmChange(films[i])}
				>
					<FilmTitle>{films[i].title}</FilmTitle>
				</Film>,
			)
		return items
	}, [films, filmChange])

	return (
		<Container>
			{isLoading || films.length === 0 ? renderSkeleton() : renderItems()}
		</Container>
	)
}

FilmsList.propTypes = {
	isLoading: PropTypes.bool,
	films: PropTypes.array,
	filmChange: PropTypes.func,
}

export default FilmsList
