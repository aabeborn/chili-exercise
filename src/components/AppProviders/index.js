import React from 'react'
import { ReactQueryConfigProvider } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import FallbackError from '../FallbackError'
import theme from '../../utils/theme'

const queryConfig = {
	useErrorBoundary: true,
	refetchAllOnWindowFocus: false,
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    height: 100%;
    font-family: 'Jost', sans-serif;
    font-size:100%;
  }

  body, #root {
    width: 100%;
    height: 100%;
    overflow:hidden;
  }
`

function AppProviders({ children }) {
	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<ThemeProvider theme={theme}>
				<ReactQueryConfigProvider config={queryConfig}>
					{children}
				</ReactQueryConfigProvider>
				<GlobalStyle />
			</ThemeProvider>
		</ErrorBoundary>
	)
}

AppProviders.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export default AppProviders
