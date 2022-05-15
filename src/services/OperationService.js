import { getHeader } from "./AuthService";

const url = 'http://localhost:4000/operations';

export const getOperations = () => {
    return fetch(`${url}/lista_ultimas/${localStorage.getItem('user')}`,{
        method: 'GET',
        headers: getHeader()
    })
    .then((res) => res.json())
}

export const addOperation = (form) => {
    fetch(`${url}/nueva_operacion/${localStorage.getItem('user')}`, {
        method:"POST",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')},
        body: JSON.stringify(form)
    })
    .then(res => {
        //console.log(res)
        return res.json()})
    .catch((error)=>{
        console.log(error)})
}