import axios from 'axios'


export const api = axios.create({
    baseURL: 'http://localhost:3500'
})

export const getShip = async () =>{

    const response = await api.get('/oceans')
    return response.data

}
export const getPort = async () =>{

    const response = await api.get('/ports')
    return response.data
    
}
export const getSize = async () =>{

    const response = await api.get('/sizes')
    return response.data
}
export const getFts = async () =>{

    const response = await api.get('/fts')
    return response.data
}

export const getDrys = async () =>{

    const response = await api.get('/drys')
    return response.data
}
