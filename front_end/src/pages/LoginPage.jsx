import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";
import { getProducts } from "../services/apis";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
        
            useEffect(() => {
                const fetchItems = async () => {
                    setLoading(true);
                    const data = await getProducts();
                    setProducts(data);
                    setLoading(false);
                }
                fetchItems();
            }, []);
        if(loading) return <p className="h-[100vh] w-[100%] flex items-center justify-center ">
            <span className="pi pi-spin pi-spinner-dotted text-[50px]"></span>
            </p>;



    return ( 
        <>
            <section className="flex justify-between items-center px-4h-[50px] px-4 max-w-[1440px] m-auto">
                <Logo open={true}/>
                <NavLink to="/">
                    <button className="flex items-center justi  fy-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md"> Voltar</button>
                </NavLink>
            </section>
            <div>
                <section
                    className="flex px-4 h-[calc(100vh-50px)] items-center justify-center bg-gradient-to-b from-c4 to-s8 ">
                    <div 
                        className="w-full flex max-w-[1440px] justify-between items-center ">
                        <section className="flex-1 w-full bg-s8 p-6 rounded-md flex flex-col gap-7">
                                <h1 className="font-bold text ">Acesse sua conta</h1>
                                <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
                                <form className="flex flex-col">
                                    <label className="flex flex-col">Login *
                                        <input placeholder="Login" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                                    </label>
                                    <label className="flex flex-col">Senha *
                                        <input placeholder="Senha" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                                    </label>
                                </form>
                                <a href="" className="underline">esqueci minha senha</a>
                                <button className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md w-full"> Acessar Conta</button>
                                <div className=" text-center">
                                    Ou faça login com <span className="pi pi-google"></span> <span className="pi pi-facebook"></span>
                                </div>
                        </section>
                        <section className="flex-1 flex items-center justify-center w-full max-lg:hidden">
                            <img src={products[1]?.image} alt="" className="w-[320px]"/>
                        </section>
                    </div>
                </section>
            </div>
            <Footer />  
        </>
     );
}
 
export default LoginPage;