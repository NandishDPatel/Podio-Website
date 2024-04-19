import React from 'react';
import popularAPI from './API/popularAPI';
import { useState } from 'react';

function UseCase(props) {
    const [API, setAPI] = useState(popularAPI);
    console.log(API);
    return (
        <>
            <div className="container useCaseCont text-center">
                <p>Using Podio</p>
                <h1>Whatever you work with, there's a <br />Podio workspace for it</h1>
                <h3>From structuring a project, to organizing your sales team, to transforming the way your entire company works together. Podio can help you simply get the job done, or grow with you to connect all your work in one place.</h3>
            </div>

            <div className="container-fluid m-0 p-0 pt-5 pb-3">
                <img src="img/use-cases.jpg" alt="" />
            </div>

            <div className="container-fluid whateverCont pb-5">
                <h1>Popular ways of using Podio</h1>
                <h3>Here's an overview of the kinds of workflows and processes people love using Podio for. Starting with the top three:</h3>
                <div className="row ms-5 me-5">
                    {API.map((res) => {
                        return (
                            <div className="col-4 mt-2 p-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4">{res.title}</div>
                                    <div className="card-text">{res.info}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container-fluid">
                <div className="content d-flex bg-white podioEffect position-relative">
                    <div className="iContent d-flex position-absolute">
                    <div className="symbol me-3 mt-3"><i class="fa-solid fa-video fa-3x"></i></div>
                    <div className="info mt-2">
                        <h1 className='fs-3'>The #PodioEffect</h1>
                        <h4 className='fs-4 fw-normal'>What our customers are getting from Podio, that <br />they can't get anywhere else.</h4>
                        <h3 className='fw-normal fs-5'><a className="" href="#"><i class="fa-solid fa-play me-2"></i>Watch customer story (3:31)</a></h3>
                    </div>
                    </div>
                    
                </div>
            </div>


        </>
    );
}

export default UseCase;