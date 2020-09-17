import axios from 'axios';

export function get(url: string, params?: any): any {
  return axios.get(url, params)
}

export function post(url: string, data: any): any {
  return axios.post(url, { ...data })
}

export function put(url: string, data: any): any {
  return axios.put(url, { ...data })
}

export function remove(url: string): any {
  return axios.delete(url)
}
