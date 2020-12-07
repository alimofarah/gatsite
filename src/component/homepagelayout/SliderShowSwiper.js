import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller, Thumbs, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import {Link} from "gatsby"
// import BackgroundImage from 'gatsby-background-image' //
// backgroundImage:"url(" +  + ")"
/*
  <img className='h-full w-full hover:bg-blue-500' src={src} alt=""/><div>acljk</div>

*/

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const SliderShowSwiper = ({data}) => {

    return (
        <div>
            <div >
                <Swiper
                    tag="section"
                    id="main"
                    navigation
                    pagination
                    spaceBetween={0}
                    slidesPerView={1}
                    className="h-screen max-w-screen-xl bg-white "
                    autoplay={true}>

                    {data.map(node => {
                        const src = node.featuredImage.node.sourceUrl

                        return (

                            <SwiperSlide
                                className="swiper-button-white  bg-cover bg-center"
                                style={{
                                backgroundImage: "url(" + src + ")"
                            }}
                                key={node.id}
                                tag="li">
                                <div className="text-center">
                                    <h1
                                        className=" text-4xl font-bold font-serif hover:text-black text-white mt-56">
                                        <Link to={`/blog${node.uri}`}>{node.title}</Link>
                                    </h1>
                                    <p
                                        className="border hover:border-black rounded-lg hover:text-black  hover:font-bold hover:font-sans font-semibold text-white text-2xl text-opacity-100 w-48 h-10 my-2 mx-auto py-auto mt-10 transform hover:scale-110 motion-reduce:transform-none ">
                                        <Link to="/blog/">
                                            Blog page</Link>
                                    </p>
                                </div>
                            </SwiperSlide>

                        )
                    })}
                </Swiper>

            </div>

        </div>
    )
}

export default SliderShowSwiper
