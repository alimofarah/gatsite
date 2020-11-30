import React from 'react'
import {navigate} from 'gatsby'
import {WiDirectionRight} from 'react-icons/Wi'

const NextLink = ({pageNumber, hasNextPage}) => {
    if (hasNextPage) {
        return (
            <div
                className="flex flex-row justify-center border rounded bg-blue-500 text-white hover:bg-blue-700 pr-0 pl-4 py-2 h-16">
                <button
                    className='focus:outline-none'
                    onClick={() => navigate(`page/${pageNumber + 1}`)}>
                    Next Posts
                </button>
                <WiDirectionRight className="text-5xl"/>

            </div>
        )
    } else {
        return null
    }
}

export default NextLink
