import axios from 'axios'

export class PostServise {
    static async getInfoUser (id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response
    }
    static async getUsers (limit , page = 1) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users` , {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}