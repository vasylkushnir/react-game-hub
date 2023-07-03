import axios, {AxiosRequestConfig} from 'axios'
import config from '../../config.json'

export interface FetchResponse<T> {
  count: number,
  next: string | null,
  results: T[]
}
//d23962e11db74196abc43e1f301020a6

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: config.key
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config )
      .then(res => res.data)
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then(res => res.data)
  }
}

export default APIClient
