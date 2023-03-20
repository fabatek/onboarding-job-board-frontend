import axios from 'axios';
const URL = 'https://640eb813cde47f68db3674fa.mockapi.io'
export const http = axios.create({
    baseURL:URL,
    headers: {
        common: {
          Accept: 'application/json'
        },
        patch: {
          'Content-Type': 'application/merge-patch+json'
        }
      }
})

 
