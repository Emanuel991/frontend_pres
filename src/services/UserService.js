import { getHeader } from "./AuthService";

const url = 'http://localhost:4000/users';

export const getUser = () => {
    return fetch(`${url}/usuario/${localStorage.getItem('user')}`,{
        method: 'GET',
        headers: getHeader()
        })
        .then((res)=> {return res.json()})
        .catch((error) => {console.log(error)})
}

export const register = (user) => {
    return fetch(`${url}/new_user`, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json', },
        body: JSON.stringify(user)
    })
    .then(res => res)
    .catch(error => {console.log(error)})
}