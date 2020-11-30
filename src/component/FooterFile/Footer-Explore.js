import React from 'react'
import {Link} from "gatsby"

const FooterExplore = () => {
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
            Link: "/contact/"
        }, {
            id: "4",
            name: 'blog',
            Link: "/blog/"
        }
    ]
    return (
        <footer className="sm:my-4">
            <div className="text-xl text-blue-500">Explore</div>
            <ul className="text-white">
                <li >{list.map(link => {
                        return (
                            <div key={link.id} className="">
                                <Link to={link.Link}>{link.name}</Link>
                            </div>
                        )
                    })}</li>
            </ul>
        </footer>
    )
}

export default FooterExplore
