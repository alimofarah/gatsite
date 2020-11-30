import React from 'react'
import {Link} from "gatsby"

const NavLinks = () => {
    const list = [
        {
            id: "1",
            name: 'Home',
            Link: "/"
        }, {
            id: "2",
            name: 'About',
            Link: "/About/"
        }, {
            id: "3",
            name: 'contact',
            Link: "/ContactForm/"
        }, {
            id: "4",
            name: 'blog',
            Link: "/blog/"
        }
    ]

    return ( 
    <> 
    <ul className="mr-20 my-auto h-16">
        <li className="flex justify-end h-16  ">

            {list.map(link => {
                return (
                    <div
                        key={link.id}
                        className="border border-white rounded-lg px-3 py-3 font-sans text-black mr-4 my-2 h-auto hover:bg-gray-800 hover:text-white ">
                        <Link className="" to={link.Link}>{link.name}</Link>
                    </div>
                )
            })}
        </li>
    </ul> 
    </>
    )
}

export default NavLinks