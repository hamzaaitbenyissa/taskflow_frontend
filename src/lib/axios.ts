import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:8080/api/v1/'

export default axios
