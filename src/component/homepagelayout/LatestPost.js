import React from 'react'
import {Link} from "gatsby"

const LatestPost = ({data}) => {

    const {
        data: {
            wpgraphql: {
                posts: {
                    nodes
                }
            }
        }
    } = data

    const Layout1 = ({pr}) => {
        return (
            <div className="xl:flex lg:flex md:flex my-12 ">
                <div
                    className="xl:flex-1 lg:flex-1 md:flex-1 h-screen xl:max-w-96 lg:max-w-96 md:w-64 sm:w-3/5 sm:mx-auto">
                    <img
                        className=" object-cover h-full w-full  rounded "
                        src={pr.featuredImage.node.sourceUrl}
                        alt=""/>
                </div>
                <div
                    className="xl:flex-1 lg:flex-1 md:flex-1 font-sans max-h-screen xl:max-w-96 lg:max-w-96 md:w-64 pl-10 sm:w-3/5 sm:mx-auto">
                    <div className="font-light my-4">{pr.date}</div>
                    <div className="text-3xl font-bold text-center my-4">
                        <Link to={`/blog${pr.uri}`}>{pr.title}</Link>
                    </div>
                    <div
                        className="font-normal antialiased text-gray-700 text-justify my-2  "
                        dangerouslySetInnerHTML={{
                        __html: pr.excerpt
                    }}/>
                    <div >created by
                        <Link className="text-blue-400" to="">@{pr.author.node.name}</Link>
                    </div>
                    <div
                        className="border rounded-lg px-6 py-2 mt-6 mx-auto w-32 bg-blue-500 hover:bg-blue-700 text-white">
                        <Link to={`/blog${pr.uri}`}>Read More</Link>
                    </div>

                </div>

            </div>
        )
    }
    const Layout2 = ({pr2}) => {

        return (
            <div className="xl:flex lg:flex md:flex my-12 ">

                <div
                    className="xl:flex-1 lg:flex-1 md:flex-1 font-sans max-h-96 xl:max-w-96 lg:max-w-96 md:max-w-96 pr-10 sm:w-3/5 sm:mx-auto">
                    <div className="font-light my-4">{pr2.date}</div>
                    <div className="text-3xl font-bold text-center">
                        <Link to={`/blog${pr2.uri}`}>{pr2.title}</Link>
                    </div>
                    <div
                        className="font-normal antialiased text-gray-700 text-justify my-2 "
                        dangerouslySetInnerHTML={{
                        __html: pr2.excerpt
                    }}/>
                    <div >created by
                        <Link className="text-blue-400" to="">@{pr2.author.node.name}</Link>
                    </div>
                    <div
                        className="border rounded-lg px-6 py-2 mt-6 mx-auto w-32 bg-blue-500 hover:bg-blue-700 text-white">
                        <Link to={`/blog${pr2.uri}`}>Read More</Link>
                    </div>

                </div>
                <div
                    className="xl:flex-1 lg:flex-1 md:flex-1 h-screen xl:max-w-96 lg:max-w-96 md:max-w-96 sm:w-3/5 sm:mx-auto">
                    <img
                        className="object-cover h-full w-full  rounded"
                        src={pr2.featuredImage.node.sourceUrl}
                        alt=""/>
                </div>

            </div>
        )
    }

    ///////////////////////////////////////////

    return (
        <div>
            <div className="mb-4 md:mb-0 max-w-5xl mx-auto mt-20 ">
                <div className="text-center text-4xl font-bold font-serif ">LATEST POSTS</div>
                <div>{nodes.map((node, index) => {

                        if ((index % 2) === 0) {

                            return (
                                <div key={node.id}><Layout1 pr={node}/></div>
                            )
                        } else {
                            return (
                                <div key={node.id}><Layout2 pr2={node}/></div>
                            )
                        }

                    })}</div>
            </div>

        </div>
    )
}

export default LatestPost
