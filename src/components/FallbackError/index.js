import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div``

function FallbackError({ error }) {
	console.error(error)
	return (
		<Container>
			<h1>oh no! An unexpected error happened!</h1>
		</Container>
	)
}

FallbackError.propTypes = {
	error: PropTypes.object.isRequired,
}

export default FallbackError
