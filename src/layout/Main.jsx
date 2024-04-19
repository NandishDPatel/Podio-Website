import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Content from './Content';
import ChanceLight from './ChanceLight';
import DependCont from './DependCont';
import ComponentCont from './ComponentCont';
import Footer from './Footer';

function Main(props) {
    return (
        <>
        <Navbar/>
        <Header/>
        <Content/>
        <ChanceLight/>
        <DependCont/>
        <ComponentCont/>
        <Footer/>
        </>
        
    );
}

export default Main;