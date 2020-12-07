import React from 'react'
import Layout from "../component/Layout.js"
import ImgAbout from "../image/about-page.jpg"

const About = () => {
    return (
        <Layout className="">
            <div className="w-full">
                <div
                    className="container xl:grid xl:grid-cols-2 xl:gap-0 h-auto w-4/5 mx-auto my-16 ">
                    <div className="text-3xl">Who we are</div>
                    <div className="">
                        Occaecati sed quasi voluptatem nisi aspernatur nobis corrupti qui eaque
                        quibusdam aliquam voluptate aperiam libero eaque nisi sit voluptatem dolores
                        cumque sunt voluptas at ipsam id iste aut atque est qui explicabo aperiam atque
                        repudiandae et nam dignissimos ipsum et et eius deserunt quo culpa culpa
                        veritatis.

                    </div>

                </div>
                <div className="w-full xl:h-screen sm:h-auto bg-yellow-200">
                    <div className="container xl:grid xl:grid-cols-2 xl:gap-0 h-6/4 w-4/5 mx-auto ">

                        <img
                            className='transform -translate-y-12 translate-x-4 object-cover bottom-0  rounded-lg border shadow-l2xl box bg-gray-500'
                            src={ImgAbout}
                            alt=""/>
                        <div className="py-16">
                            <div className="font-bold mb-10">Provident non nostrum eos corporis ut deserunt</div>
                            <div>Commodi asperiores rerum provident enim quia repudiandae. Vero eum mollitia
                                qui voluptas iure Illum et saepe nobis mollitia Delectus repellat esse et quo
                                est. Provident est et. Qui est nihil fuga et harum Odit hic sed dolor aperiam
                                nihil Tempore nobis explicabo nihil Est ut quam consectetur et Facere est
                                nesciunt ut et sunt perferendis consectetur. Dolor aperiam velit. Et nihil et
                                consequatur quos. Aut dicta voluptatem magnam. Saepe temporibus est dolorum
                                Rerum laborum dolores error fugit ea in. neque non aut Ipsam impedit ab unde eos
                                Soluta omnis provident qui voluptatem commodi est. Illum molestias reiciendis et
                                ab. Minima doloremque eos tempora. Porro …</div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    )
}

export default About
