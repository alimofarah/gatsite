import React from 'react'
import {Link} from "gatsby"
import {FaInstagram, FaFacebookF, FaLinkedin, FaTwitterSquare, FaYoutube} from 'react-icons/Fa';
const FooterFollow = () => {
    const list = [
        {
            logo: <Link to="/"><FaInstagram className="bg-red-500 text-white rounded mx-1 "/></Link>,
            id: 1
        }, {
            logo: <Link to="/"><FaFacebookF className="text-white bg-blue-700 mx-1 rounded"/></Link>,
            id: 2
        }, {
            logo: <Link to="/"><FaLinkedin className="bg-white text-blue-700 mx-1 rounded"/></Link>,
            id: 3
        }, {
            logo: <Link to="/"><FaTwitterSquare className="bg-white text-blue-500 mx-1 rounded"/></Link>,
            id: 4
        }, {
            logo: <Link to="/"><FaYoutube className="bg-white text-red-600 mx-1 rounded"/></Link>,
            id: 5
        }
    ]
    return (
        <footer className="sm:my-4">
            <div className="text-blue-500 text-xl">Connect with us</div>
            <form className="m-2 flex">
                <input
                    className="bg-white rounded-l-lg py-2 pl-4 focus:outline-none "
                    placeholder="  your@gmail.com"/>
                <button className="bg-blue-700 rounded-r-lg px-2 text-white">
                    <Link to="">Subscribe</Link>
                </button>
            </form>
            <div className="flex flex-row justify-center">
                {list.map(e => {
                    return (
                        <div key={e.id} className="my-4">
                            <div className="text-4xl ">
                                {e.logo}
                            </div>
                        </div>

                    )
                })}
            </div>

        </footer>
    )
}

export default FooterFollow
