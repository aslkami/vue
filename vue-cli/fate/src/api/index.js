import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4796'

axios.interceptors.response.use((res) => res.data)

export let getSwiper = () => axios.get('/swiper')
export let getStar = () => axios.get('/star')