import React from 'react'
import NavLinks from "./NavLinks"
import Logo from "../../image/logo/logo.png"
const Navbar = () => {

    return (
        <nav className="flex  justify-between  h-16">
            <img className=" object-cover ml-20 " src={Logo} alt=""/>

            <NavLinks className="mr-20 "/>

        </nav>
    )
}

export default Navbar
