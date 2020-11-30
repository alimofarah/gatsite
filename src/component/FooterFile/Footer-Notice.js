import React from 'react'
import {Link} from 'gatsby'

const FooterNotice = () => {

    return (
        <footer >
            <div
                className="container mx-auto px-6 sm:flex sm:mt-8 flex flex-row text-white mx-4">
                <Link className="mx-2" to="">Legal</Link>
                <Link className="mx-2" to="">Privacy Policy
                </Link>
                <Link className="mx-2" to="">Terms of Use</Link>

            </div>
            <div className="container mx-auto px-6 sm:flex sm:mt-8 flex flex-col">
                <div className="text-white">Notice :</div>
                <div className="text-white mb-20">Copyright © 2020 Network Solutions. All rights
                    reserved. All registered trademarks herein are the property of their respective
                    owners.
                </div>
            </div>
        </footer>
    )
}

export default FooterNotice
