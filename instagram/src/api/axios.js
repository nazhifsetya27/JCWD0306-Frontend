import axios from 'axios';
export const api = axios.create({
 //  baseURL: 'https://mock-api-ig2.glitch.me/',
 baseURL: 'http://localhost:2500'
});
