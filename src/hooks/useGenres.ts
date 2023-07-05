import genres from '../data/Genres'
import {useQuery} from "@tanstack/react-query"
import APIClient from '../services/api-client'
import ms from 'ms'
import Genre from "../interfaces/Genre"

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),    //24 * 60 * 60 * 1000,  24 hours
  initialData: genres
})
export default useGenres
