import React from 'react';
import Footer from '../../Footer/Footer';
import Carousels from '../Carousels/Carousels';
import Depatments from '../Depatments/Depatments';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousels></Carousels>
            <Depatments></Depatments>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;