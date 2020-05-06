import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skeleton from '../Skeleton'

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	padding: 4rem;
	@media screen and (max-width: 48em) {
		justify-content: start;
		padding: 1rem;
	}
	& :not(:last-child) {
		margin-bottom: 2rem;
	}
`

const CoverLoader = styled(Skeleton)`
	height: 18rem;
	width: 12rem;
`

const Cover = styled.img`
	border-radius: 0.25rem;
	height: 18rem;
	width: 12rem;
`

const Title = styled.span`
	font-size: 2.5rem;
	color: #fff;
`

const TitleLoader = styled(Skeleton)`
	height: 2.5rem;
	width: 10rem;
`

function FilmDetail({ film = {}, isLoading = false }) {
	return (
		<Container>
			{isLoading || !film?.coverUrl || !film?.title ? (
				<>
					<TitleLoader /> <CoverLoader height="85%" />
				</>
			) : (
				<>
					<Title>{film.title}</Title>
					<Cover alt="cover" src={film.coverUrl} />
				</>
			)}
		</Container>
	)
}

FilmDetail.propTypes = {
	film: PropTypes.object,
	isLoading: PropTypes.bool,
}

export default FilmDetail
