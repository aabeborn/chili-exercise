import React from 'react'
import styled from 'styled-components'
import useFilms from './api/films'
import FilmDetail from './components/FilmDetail'
import FilmsList from './components/FilmsList'

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: ${({ image, theme }) => `url(${image}, ${theme.background})`};
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	display: block;
	&::before {
		content: '';
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({ theme }) => theme.background};
		opacity: 0.9;
	}
	& > * {
		z-index: 1;
	}
`

function App() {
	const { films, status } = useFilms(
		data => setActiveFilm(() => ({ ...data[0] })),
		{ retry: false },
	)
	const [activeFilm, setActiveFilm] = React.useState(null)
	const getFilmsList = React.useCallback(() => {
		if (!films || films.length === 0 || !activeFilm) return []
		const items = films.filter(film => film.id !== activeFilm.id)
		return items
	}, [activeFilm, films])
	return (
		<Container image={activeFilm?.backdropUrl}>
			<FilmDetail film={activeFilm} isLoading={status === 'loading'} />
			<FilmsList
				films={getFilmsList()}
				filmChange={setActiveFilm}
				isLoading={status === 'loading'}
			/>
		</Container>
	)
}

export default App
