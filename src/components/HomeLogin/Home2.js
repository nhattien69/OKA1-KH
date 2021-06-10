import React from 'react'
import NavbarLogin from './navbarLogin';
import './Home2.css'
import NavbarMenu2 from '../Navbar/navbar-bot';
import Form1 from '../DatVeMayBay/Form1';
import Body from '../Body/Body';
import LowerBody from '../Body/Body2';
import Footer from '../footer/footer';

function Home2() {
    return (
        <>
            <NavbarLogin />
            <NavbarMenu2 />
            <Form1 />
            <Body />
            <LowerBody />
            <Footer/>
        </>
    )
}
export default Home2;