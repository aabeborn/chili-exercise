const API_URL = process.env.REACT_APP_URL ?? 'http://localhost:3004'

function client(endpoint, { body, ...customConfig } = {}) {
	const headers = { 'content-type': 'application/json' }
	const config = {
		method: body ? 'POST' : 'GET',
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers,
		},
	}
	if (body) {
		config.body = JSON.stringify(body)
	}

	return fetch(`${API_URL}/${endpoint}`, config).then(async r => {
		const data = await r.json()
		if (r.ok) {
			return data
		}
		return Promise.reject(data)
	})
}

export { client }
