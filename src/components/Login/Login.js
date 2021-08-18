import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
// import { Field, reduxForm } from 'redux-form'
import { useState } from 'react'




const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const submit = (values) => {
        console.log('submit inside form')
        console.log(values)
    }

    return ( <
        div className = "container" >
        <
        div className = "Login" >
        <
        h2 > Welcome To React Hunter < /h2> <
        form className = "Login-account"
        onSubmit = { submit } >
        <
        h3 > Login here < /h3>
        Full name: < input type = "text"
        className = "fullname"
        value = { name }
        onChange = {
            (event) => { setName(event.target.value) } }
        required / >
        Email: < input type = "text"
        className = "email"
        value = { email }
        onChange = {
            (event) => { setEmail(event.target.value) } }
        required / >
        Password: < input type = "password"
        value = { password }
        onChange = {
            (event) => { setPassword(event.target.value) } }
        required / >
        <
        button type = "submit"
        className = "Home-Enter" > < Link to = "Home" > Login < /Link></button >
        <
        br / >
        <
        Link to = "Forgetpassword"
        className = "pass" > Forget Password < /Link> <
        br / >
        <
        Link to = "Signup"
        className = "sign" > Sign Up < /Link> <
        /form> <
        /div> <
        /div>
    )
}

export default Login