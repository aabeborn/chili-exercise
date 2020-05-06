import { useQuery } from 'react-query'
import { client } from './client'

function read() {
	return client('films')
}

function useFilms(success = () => {}, { ...options } = {}) {
	const { data: films, status, ...other } = useQuery(['films', 1], [], read, {
		onSuccess: data => {
			success(data)
		},
		retry: false,
		...options,
	})
	return {
		films: films ?? [],
		status,
		other,
	}
}

export default useFilms
