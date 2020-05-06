import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import AppProviders from './components/AppProviders'
import PageLoader from './components/PageLoader'

const rootElement = document.getElementById('root')
ReactDOM.render(
	<AppProviders>
		<React.Suspense fallback={<PageLoader />}>
			<App />
		</React.Suspense>
	</AppProviders>,
	rootElement,
)
