import React, { useEffect } from 'react'
import PostCard from '../postcard/PostCard';
import './Parallax.css'


function ParallaxSite() {

    let textSizeDefault = 20;


    useEffect(() => {
        // setInterval(() => {
        //     if (textSizeDefault < 100) {
        //         textSizeDefault += 10
        //         console.log("2 seconds has passed")
        //         return textSizeDefault
        //     }
        // }, 1000)
    })



    return (
        <React.Fragment>

            <div className='pimg1'>
                <div className='ptext'>
                    <span className="border" href="/">
                        My Projects
                    </span>
                </div>
                <div className='explore'>
                    <a className="col bg-light opacity-75 btn btn-outline-dark" href="#card">
                        Explore
                    </a>
                </div>
            </div>

            <section className='section'>
                <h1 className='display-1'>ParallaxSite Page 1</h1><a href="#section2">Next Page</a>
                <p style={{ fontSize: `${textSizeDefault}px` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad
                    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                    quasi aliquam eligendi, placeat qui corporis!</p>
            </section>

            <div className='pimg2' id='section2'>
                <div className='ptext'>
                    <span className='border'>My Projects Page 2</span>
                </div>
            </div>

            <section className='section'>
                <h1 className='display-1'>ParallaxSite Page 2</h1><a href="#card">Next Page</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad
                    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                    quasi aliquam eligendi, placeat qui corporis!</p>
            </section>

            <div className='pimg3'>
                <div className='ptext'>
                    <span className='border'>My Projects Page 3</span>
                </div>
            </div>

            <section className='section opacity-75' id="card">
                <h1 className='display-3'>Check out my projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur
                    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam
                    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                    doloremque. Quaerat provident commodi consectetur veniam similique ad
                    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo
                    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore
                    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam
                    quasi aliquam eligendi, placeat qui corporis!</p>
                <PostCard />

                <a href="# " className='btn btn-outline-light'>Return to top</a>
            </section>


        </React.Fragment>
    )
}

export default ParallaxSite


