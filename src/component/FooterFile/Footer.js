import React from 'react'
import FooterExplore from './Footer-Explore'
import FooterFollow from './Footer-Follow'
import FooterNotice from "./Footer-Notice"
import FooterAbout from "./Footer-About"
const Footer = () => {

    return (
        <footer className="bg-gray-900">
            <div
                className="xl:flex xl:flex-row xl:justify-between  lg:flex lg:flex-row lg:justify-evenly md:flex md:flex-row md:justify-evenly sm:w-3/5 py-20 mx-auto">
                <FooterAbout className="md:mx-4 md:px-4"/>
                <FooterExplore className="md:mx-4 md:px-4"/>
                <FooterFollow className="md:mx-4 md:px-4"/>
            </div>
            <hr className="h-px mt-6 bg-gray-700 border-none"></hr>

            <FooterNotice className=""/>
        </footer>

    )
}

export default Footer
