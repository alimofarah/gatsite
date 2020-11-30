import React from 'react'
import {navigate} from 'gatsby'
import {WiDirectionLeft} from 'react-icons/Wi'

const PreviousLink = ({pageNumber}) => {
    let previousLink = null

    if (!pageNumber) {
        return null
    } else if (1 === pageNumber) {
        previousLink = `/`
    } else if (2 < pageNumber) {
        previousLink = `page/${pageNumber - 1}`
    } else if (2 === pageNumber) {
        previousLink = `/blog/`
    }

    return (
        <div
            className="flex flex-row justify-center border rounded bg-blue-500 text-white hover:bg-blue-700 pl-2 pr-3 py-2 h-16 ">
            <WiDirectionLeft className=" text-3xl mt-2"/>
            <button className='focus:outline-none' onClick={() => navigate(previousLink)}>
                Previous Posts
            </button>

        </div>
    )
}

export default PreviousLink
