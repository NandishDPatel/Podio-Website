import React, { useState } from 'react';
import imageContAPI from './API/imageContAPI';

function Content(props) {
    const[API,setAPI] = useState(imageContAPI);
    return (
        <>
            <div className="container">
                <div className="row driveCont">
                    <div className="col-4">
                        <div className="image">
                            <img src="img/02-mobile_pc.png" alt="" />
                        </div>
                    </div>
                    <div className="col-8 ps-5">
                        <p>Consolidated data</p>
                        <h1>Drive your project forward, successfully</h1>
                        <h3>Podio transforms your project data into one tool to align all content, conversations, and process into one collaboration point.</h3>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>

            <div className="container tighterCont text-center ps-5 pe-5 pb-5">
                <p>Fast setup, full control</p>
                <h1>Tighter collaboration for <br/>greater durability</h1>
                <h3>Clearly defined roles and a custom tool fitted to how your team works best will help<br/> improve delivery time, effectiveness and relationships.</h3>
            </div>

            <div className="container easyCont ps-5 pe-5">
                <div className="row">
                    {
                        API.map((res)=>{
                            return <div className="col-4 pt-2 ps-5 pe-5 pb-3 text-center">
                                <h2 className='fw-normal'>{res.title}</h2>
                                <img className='p-2' src={res.image} alt="" height="60%" width="75%"/>
                                <p className='fw-normal'>{res.content}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Content;