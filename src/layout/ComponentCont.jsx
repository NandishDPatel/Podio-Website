import React, { useState } from 'react';
import FeaturesAPI from './API/featuresAPI';

function ComponentCont(props) {
    const [API, setAPI] = useState(FeaturesAPI);
    console.log(API);
    return (
        <>
            <div className="container text-center">
                <h4 className='fw-normal fs-5'>Features</h4>
                <h1>The components you need, together on one tool</h1>

                <div className="row">
                    {API.map((res) => {
                        console.log(res);
                        return (
                        <div className="componentCont col-3 d-flex mt-5 align-items-center">
                            <img className="me-2" src={res.image} alt="" />
                            <h5>{res.data}</h5>
                        </div>);

                    })}
                </div>

            </div>
        </>
    );
}

export default ComponentCont;