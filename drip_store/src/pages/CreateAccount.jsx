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
                <section className="p-4 max-w-[750px] m-auto">
                    <h1 className="text-[32px]">Criar Conta</h1>
                    <section className="flex flex-col gap-4">
                        <h2 className="text-[16px] font-bold">Informações Pessoais</h2>
                        <hr />
                        <form action="" className="text-[14px] flex flex-col gap-4">
                            <label className="flex  flex-col">Nome Completo *
                                <input placeholder="Insira seu nome" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">CPF *
                                <input placeholder="Insinira seu CPF" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">E-mail *
                                <input placeholder="Insira seu email" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">Celular *
                                <input placeholder="Insira seu celular" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                        </form>
                    </section>
                    <section className="flex flex-col gap-4">
                        <h2 className="text-[16px] font-bold">Informações de Entrega</h2>
                        <hr />
                        <form action="" className="text-[14px] flex flex-col gap-4">
                            <label className="flex  flex-col">Endereço *
                                <input placeholder="Insira seu endereço" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">Bairro *
                                <input placeholder="Insira seu bairro" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">Cidade *
                                <input placeholder="Insira sua cidade" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">Cep *
                                <input placeholder="Insira seu cep" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">Complemento *
                                <input placeholder="Insira seu complemento" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                        </form>
                    </section>
                    <label className="flex">
                        <input type="checkbox" className="appearance-none w-[20px] h-4 border border-gray-400 rounded-sm checked:bg-c2 checked:border-purple-600 checked:before:content-['✓'] flex items-center text-white mr-2 mt-1"/>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                    </label>
                    <button
                    className="w-full flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md">
                        Entrar
                    </button>
                </section>
            </div>
            <Footer />  
        </>
     );
}
 
export default CreateAccountPage;