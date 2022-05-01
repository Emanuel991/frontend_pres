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