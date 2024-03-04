import axios from 'axios'

export async function getComments(gameId) {
    const { data } = await axios.get(`/api/comments/${gameId}`)
    return data
}

// export async function postComment(comment) {
//     const { data } = await axios.post('/api/comments', comment)
//     return data
// }
// export async function updateComment(comment, id) {
//     const { data } = await axios.put(`/api/comments/${id}`, comment)
//     return data
// }

// export async function deleteComment(id) {
//     const { data } = await axios.delete(`/api/comments/${id}`)
//     return data
// }

export async function postComment(comment) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.post('/api/comments', comment, authHeader)
    return data
}

export async function updateComment(comment, id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.put(`/api/comments/${id}`, comment, authHeader)
    return data
}

export async function deleteComment(id) {
    const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }
    const { data } = await axios.delete(`/api/comments/${id}`, authHeader)
    return data
}

export async function signUp(user) {
    const { data } = await axios.post('/api/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}
