import axios from 'axios';
export const http = axios.create({
    baseURL:'https://640eb813cde47f68db3674fa.mockapi.io',
    headers: {
        common: {
          Accept: 'application/json'
        },
        patch: {
          'Content-Type': 'application/merge-patch+json'
        }
      }
    
})


 
 http.interceptors.request.use((config:any) => {
    config.headers = {
        ...config.headers,
       }
    return config
 },(err) => {
    return Promise.reject(err)
 })

 
