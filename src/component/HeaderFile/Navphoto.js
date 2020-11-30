import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Searche from "../Search/Search.js"

const Navphoto = ({children}) => {
    const {image} = useStaticQuery(graphql `
    query {
      image: file(relativePath: { eq: "search-bg.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return (
        <div className="my-40 ">
            <div className=" w-3/4 mx-auto rounded-lg">
                <BackgroundImage
                    className="w-full h-screen object-cover rounded-lg"
                    fluid={image.sharp.fluid}>
                    <h2
                        className="text-center text-3xl font-extrabold leading-relaxed text-gray-800  pt-12  ">
                        How can we help ?
                    </h2>
                    <div className="w-1/4 mx-auto">
                        <Searche/>
                    </div>
                </BackgroundImage>
            </div>
        </div>
    )

}
export default Navphoto