import axios from 'axios';
// esto crea una importación que permite usar direcciones sin repetir las configuraciones
export const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // URL de donde se extraen los registros en formato json
    timeout: 10000, //milisegundos máximos para responder si se pasa se cancela
    headers: {
        'Content-Type': 'application/json', // esto solo envía y recibe json
    },
});