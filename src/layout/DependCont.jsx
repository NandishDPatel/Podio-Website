import React from 'react';

function DependCont(props) {
    return (
        <>
            <div className="container dependCont">
                <div className="row driveCont">
                    <div className="col-4">
                        <div className="image">
                            <img src="img/07-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-8 ps-5">
                        <p>Secure & reliable</p>
                        <h1>Dependability you can trust to run your business</h1>
                        <h3 className='pt-3 pb-4'>Podio’s stability (99.99% uptime last year) and intuitive interface makes deployment straightforward. And as part of Citrix, we adhere to the most rigorous security standards.</h3>
                        <div className="d-flex">
                            <button className='ms-5 me-5'>Learn More</button>
                            <div className="link ms-5 mt-2"><a className="text-decoration-none" href="">Download our Security Whitepaper<i class="fa-solid fa-link ms-1"></i></a></div>
                        </div>

                    </div>
                </div>
            </div></>
    );
}

export default DependCont;