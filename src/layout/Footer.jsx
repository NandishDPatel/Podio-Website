import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="mt-5 container-fluid text-center ftr text-white p-5">
                <p className='fs-1'><b>Get started on Podio,</b> for<br /> streamlined work that will drive your<br /> businesss forward.</p>
                <div className="srch mb-5">
                    <input className='ps-3' type="text" placeholder="Enter your email address" />
                    <button className='srchBtn'>Start now</button>
                </div>

                
            </div>

            <div className="ftrNav container-fluid">
            <nav class="navbar navbar-expand-sm navbar-light bg-whitt border-bottom ps-5 pe-5">
                <div class="container-fluid">
                    <a class="navbar-brand" href="">
                        <img src="img/podio-logo.svg" height="" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="mynavbar">
                        <ul class="navbar-nav nav-items me-auto">
                            <li class="nav-item">
                            <a className="nav-link text-decoration-none" href="">Privacy and legel terms <i class="fa-solid fa-link ms-1"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Legal note</a>
                            </li>
                            <li class="nav-item">
                            <a className="nav-link text-decoration-none" href="">Podio status<i class="fa-solid fa-link ms-1"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Sitemap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Cookie preferences</a>
                            </li>
                            <li class="nav-item">
                            <a className="nav-link text-decoration-none" href="">Do not sell my personal information<i class="fa-solid fa-link ms-1"></i></a>
                            </li>
                            <li className='nav-item languages align-items-center pt-2'>
                                <select className="" placeholder="English" id="">
                                    <option>English</option>
                                    <option>Gujarati</option>
                                    <option>Hindi</option>
                                    <option>Bengali</option>
                                    <option>Kashmiri</option>
                                    <option>Tamil</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>

            <p className='ftrP text-end'>© 2023, Cloud Software Group, Inc. All rights reserved.</p>
        </>
    );
}

export default Footer;