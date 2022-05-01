const url = 'http://localhost:4000';

export const Login = user => {
    return fetch(`${url}/login`,{
        method: 'POST',
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json', },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.text();
    })
    .catch(error => {console.log(error)})
}

/* export const authenticate = (data, setUser) => {
    setUser(data)
    localStorage.setItem('user',data);
} */

export const getHeader = () => {
    return {'Authorization': localStorage.getItem('token')};
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}