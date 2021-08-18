import React from 'react'
import './Home.css'
import ImageHunter from '../image/hunter1.jpg'
// import Internet from '../image/internet2.jpg'
import Facebook from '../image/facebook.jpg'
import Gmail from '../image/gmail.jpg'
import Twitter from '../image/twitter.jpg'
import Youtube from '../image/youtube.jpg'
import { Link } from 'react-router-dom'


export default function Home() {
    return ( <
        div className = "container-home" >
        <
        div className = "nav" >
        <
        div className = "logo" > < img src = { ImageHunter }
        alt = "hunter" / > < /div> <
        div className = "Home-nav" >
        <
        ul className = "ul-nav" >
        <
        li className = "li-nav" > < a href = "#home" > Home < /a></li >
        <
        li className = "li-nav" > < a href = "#mission" > Mission < /a></li >
        <
        li className = "li-nav" > < a href = "#product" > Product < /a></li >
        <
        li className = "li-nav" > < a href = "#contact" > Contact < /a></li >
        <
        li className = "loginout" >
        <
        Link to = "/Login" > Logout < /Link> <
        /li> <
        /ul> <
        /div> <
        /div> <
        h2 > Hunter < /h2> <
        h4 > Do you need to connect with people ? < /h4> <
        p > This platform has an opportunity
        for anyone to find an email address,
        please kindly type the email address here, Thank you. < /p> <
        br / >
        <
        div className = "form-email" >
        <
        div className = "form-input" >
        <
        input type = "text"
        name = "email"
        placeholder = "Company.com..." / >
        <
        input type = "submit"
        value = "submit" / >
        <
        /div> <
        /div> <
        div id = "mission" >
        <
        div className = "image-area" > { /* <img src={Internet} alt="" /> */ } <
        h2 > Mission < /h2> <
        p > This makes you easy to find the email address < /p> <
        /div> <
        /div> <
        div id = "product"
        className = "product" >
        <
        h2 > Product < /h2> <
        div className = "domain-email" >
        <
        div className = "box" >
        <
        h3 > Domain Search < /h3> <
        p > This domain search allows you to find email address which belongs to a company, and officials. < /p> <
        button className = "find-email" > Domain Search < /button> <
        /div> <
        div className = "box" >
        <
        h3 > Email Finder < /h3> <
        p > The email finder allows you to find the email address of an company or officials.You click here. < /p> <
        button className = "find-email" > Email Finder < /button> <
        /div> <
        div className = "box" >
        <
        h3 > Author Finder < /h3> <
        p > Find the email address of an article author.You click here to show information and find an email author. < /p> <
        button className = "find-email" > Author Finder < /button> <
        /div> <
        div className = "box" >
        <
        h3 > Email Verifier < /h3> <
        p > This gives you the chance to verify the email address.You click here to check your email verifer. < /p> <
        button className = "find-email" > Email Verifier < /button> <
        /div> <
        /div> <
        /div> <
        div className = "detail" >
        <
        div className = "group" >
        <
        div className = "list" >
        <
        h2 > Product < /h2> <
        ul className = "information" >
        <
        li > < a href = "#Domain" > Domain Search < /a></li >
        <
        li > < a href = "#Email" > Email Finder < /a></li >
        <
        li > < a href = "#Author" > Author Finder < /a></li >
        <
        li > < a href = "#Emailverifier" > Email Finder < /a></li >
        <
        /ul> <
        /div> <
        div className = "list" >
        <
        h2 > Add - Ons < /h2> <
        ul className = "information" >
        <
        li > < a href = "#Chrome" > Chrome Extension < /a></li >
        <
        li > < a href = "#Firefox" > Firefox add - on < /a></li >
        <
        li > < a href = "#Google" > Google sheet Add - on < /a></li >
        <
        /ul> <
        /div>                <
        div className = "list" >
        <
        h2 > Company < /h2> <
        ul className = "information" >
        <
        li > < a href = "#about" > About < /a></li >
        <
        li > < a href = "#data" > Our data < /a></li >
        <
        li > < a href = "#blog" > Blog < /a></li >
        <
        li > < a href = "#Engineering" > Engineering Blog < /a></li >
        <
        /ul> <
        /div> <
        div className = "list" >
        <
        h2 > Support < /h2> <
        ul className = "information" >
        <
        li > < a href = "#help" > Help Center < /a></li >
        <
        li > < a href = "#claim" > APl < /a></li >
        <
        li > < a href = "#Bug" > Bug Bounty < /a></li >
        <
        li > < a href = "#System" > All System Operation < /a></li >
        <
        /ul> <
        /div> <
        /div> <
        /div> <
        div id = "contact" >
        <
        div className = "social" >
        <
        ul >
        <
        li className = "show" > < a href = "https://www.facebook.com" > < img src = { Facebook }
        alt = "" / > < /a></li >
        <
        li className = "show" > < a href = "https://www.gmail.com" > < img src = { Gmail }
        alt = "" / > < /a></li >
        <
        li className = "show" > < a href = "https://www.youtube.com" > < img src = { Twitter }
        alt = "" / > < /a></li >
        <
        li className = "show" > < a href = "https://www.instagram.com" > < img src = { Youtube }
        alt = "" / > < /a></li >
        <
        /ul> <
        /div> <
        div className = "copyright" >
        <
        p > Copyright @2021 All Rights Reserved.Hunter @ is a registered trademark of hunter web service, inc < /p> <
        p > Terms, Privacy, Security. < /p> <
        /div> <
        /div> <
        /div>
    )
}