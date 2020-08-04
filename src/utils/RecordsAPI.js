import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5f256e46c85de200162930c9.mockapi.io"

export const getAll = () =>
  axios.get(`${api}/api/v1/employed`)

export const create = (body) =>
  axios.post(`${api}/api/v1/employed`, body)

export const update = (id, body) =>
  axios.put(`${api}/api/v1/employed/${id}`, body)

export const remove = (id) =>
  axios.delete(`${api}/api/v1/employed/${id}`)
