import React from 'react';

import Carousels from '../Carousels/Carousels';
import Depatments from '../Depatments/Depatments';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Courseitems from '../Courseitems/Courseitems';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carousels></Carousels>
            <Depatments></Depatments>
            <Courseitems></Courseitems>
            <Footer></Footer>
            
    
           
            
            
        </div>
    );
};

export default Home;