import axios from 'axios'

export default axios.create({

    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 294a64cf018e1439d98cc9bbbd10f80f46f3a8d7a901094f6ac5b3200518d252'
    }

});