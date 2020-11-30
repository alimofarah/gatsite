import React from 'react'
import {Link} from "gatsby"
//import {FaTwitter,FiMapPin} from 'react-icons/fa';
import {BiMap, BiPhoneCall} from 'react-icons/Bi';
import {SiGmail} from 'react-icons/Si';

const FooterAbout = () => {
    const list = [
        {
            item1: 'Address :',
            item2: <div>
                <Link to="/">
                    <div>Shannon Square East 51st Street South</div>
                </Link>
            </div>,
            logo: <Link to="/"><BiMap/></Link>,
            id: 1
        }, {
            item1: 'phone :',
            item2: "09374103615",
            logo: <Link to="/"><BiPhoneCall/></Link>,
            id: 2
        }, {
            item1: 'Have any questions ?',
            item2: "Alimofarah248@gmail.com",
            logo: <Link to="/"><SiGmail/></Link>,
            id: 3
        }
    ]
    return (
        <div className="text-white sm:my-4">
            <div className="text-xl text-blue-500">About us</div>
            {list.map(e => {
                return (
                    <div key={e.id}>
                        <div className="flex">
                            <div className="text-blue-500 mx-4 my-1">{e.logo}</div>
                            <div className="">{e.item1}</div>
                        </div>
                        <div>{e.item2}</div>

                    </div>

                )
            })}
        </div>
    )
}

export default FooterAbout
