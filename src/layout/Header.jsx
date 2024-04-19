import React, { useState } from 'react';
import HeaderAPI from './API/headerAPI';

function Header(props) {
    const[API,setAPI] = useState(HeaderAPI);
    console.log(HeaderAPI);

    return (
        <>
        
        <div className='container-fluid myheader'> 
            <div className="hdrContent text-white">
                    <h1>Get your team <br/>working in sync</h1>
                    <p>Build powerful low-code business solutions to customize <br/> work and communication</p>
                    <div className="srch">
                        <input type="text" placeholder="Enter your work email"/>
                        <button className='srchBtn'>Start free</button>
                    </div>
            </div>
        </div>
        
        <div className="container-fluid headerApi p-5">

            <div className="row">

                {API.map((res)=>{
                    console.log(res);
                    return (
                        <div className="col-2">
                        <img src={res.image} alt="Company Name" />
                    </div>
                    )
                })}

            </div>

        </div>
        
        </>

    );
}

export default Header;