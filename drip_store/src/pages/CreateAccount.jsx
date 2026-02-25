import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";
import { getProducts } from "../services/apis";
import { useEffect, useState } from "react";

const CreateAccountPage = () => {
    return ( 
        <>
             <section className="flex justify-between items-center px-4h-[50px] px-4 max-w-[1440px] m-auto">
                <Logo open={true}/>
                <NavLink to="/">
                    <button className="flex items-center justi  fy-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md"> Voltar</button>
                </NavLink>
            </section>
            <div>
                <section>
                </section>
            </div>
            <Footer />  
        </>
     );
}
 
export default CreateAccountPage;