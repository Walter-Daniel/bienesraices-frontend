import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables()

const bienesRaicesApi = axios.create({
    baseURL: VITE_API_URL
});

//configurar interceptores

export default bienesRaicesApi;