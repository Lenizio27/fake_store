import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { Logo } from "../components/Logo";
import { getProducts } from "../services/apis";
import { useEffect, useState } from "react";

const CreateAccountPage = () => {
    // Dentro da função CreateAccountPage, antes do handleRegister
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault(); // Evita que a página recarregue ao clicar no botão

        // 1. O 'body' deve ter exatamente o que o servidor espera: email, password e name
        const novoUsuario = {
            name: name,      // Valor do seu estado de Nome
            email: email,    // Valor do seu estado de E-mail
            password: password // Valor do seu estado de Senha
        };

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoUsuario)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Conta criada com sucesso! Agora faça login.");
                // Aqui você pode redirecionar o usuário para a página de Login
            } else {
                alert(data.message); // Exibe: "Este e-mail já está cadastrado!"
            }
        } catch (error) {
            console.error("Erro ao conectar com o servidor:", error);
        }
    };

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
                    <h1 className="text-[32px] max-md:text-center">Criar Conta</h1>
                    <section className="flex flex-col gap-4">
                        <h2 className="text-[16px] font-bold">Informações Pessoais</h2>
                        <hr />
                        <form action="" className="text-[14px] flex flex-col gap-4">
                            <label className="flex  flex-col"> Primeiro nome  *
                                <input 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Insira seu nome" 
                                type="text"
                                className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">E-mail *
                                <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Insira seu email" 
                                type="email"
                                className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            <label className="flex flex-col">Senha *
                                <input 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Insira sua senha" 
                                type="password"
                                className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                        </form>
                    </section>
                    <section className="flex flex-col gap-4">
                        <h2 className="text-[16px] font-bold">Informações de Entrega</h2>
                        <hr />
                        <form action="" className="text-[14px] flex flex-col gap-4">
                            <label className="flex  flex-col">CEP (Opcional)*
                                <input placeholder="Insira seu endereço" type="text" className=" pl-5 bg-s6  h-[60px] rounded-md w-full" />
                            </label>
                            
                        </form>
                    </section>
                    <label className="flex">
                        <input type="checkbox" className="appearance-none w-[20px] h-4 border border-gray-400 rounded-sm checked:bg-c2 checked:border-purple-600 checked:before:content-['✓'] flex items-center text-white mr-2 mt-1"/>Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
                    </label>
                    <button
                    onClick={handleRegister}
                    className="w-full flex items-center justify-center text-s7 h-[22px] bg-c2 px-7 py-5 rounded-md">
                        Criar Conta
                    </button>
                </section>
            </div>
            <Footer />  
        </>
     );
}
 
export default CreateAccountPage;