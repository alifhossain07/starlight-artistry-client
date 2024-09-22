import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UpdatedHeader from '../UpdatedHeader/UpdatedHeader';


const Root = () => {
    return (
        <div>
            <Header></Header>
            {/* <UpdatedHeader></UpdatedHeader> */}
            <Outlet></Outlet>
            <Footer></Footer>
           
       
        </div>
    );
};

export default Root;