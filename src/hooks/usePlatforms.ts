import {useQuery} from "@tanstack/react-query"
import platforms from '../data/Platforms'
import APIClient from "../services/api-client"
import ms from "ms"
import Platform from "../enteties/Platform"

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),    //24 * 60 * 60 * 1000, // 24 hours
  initialData: platforms
})
export default usePlatforms
