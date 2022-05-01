import React from 'react'
import { Link } from 'react-router-dom';

export default class Errors extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            hasError: true
        })
    }
    
    render() {
        if(this.state.hasError){
            return(
                <>
                    <div className='mt-3 text-center'>
                        <h2>Su sesión ha expirado, Por favor inicie sesión nuevamente</h2>
                        <Link to="/login">Login</Link>
                    </div>
                </>
            )
        }
        return this.props.children;
    }
}