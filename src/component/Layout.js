import React from 'react'
import Footer from "./FooterFile/Footer.js"
import Navbar from "./HeaderFile/Navbar.js"

const Layout = ({children}) => {
    return (
        <div className="">
            <Navbar/> {children}

            <Footer/>

        </div>
    )
}

export default Layout
