import { useState, useEffect } from "react";

const ProductViewPage = () => {
    const [abaAtiva, setAbaAtiva] = useState(1);
    const [itensCarrinho, setItensCarrinho] = useState([]);
    const [userData, setUserData] = useState(null);

    const arrayLinks = [
        {
            route: "1",
            title: "Meus Pedidos"
        },
        {
            route: "2",
            title: "Minhas Informações"
        },
    ]


        useEffect(() => {
            const getPerfil = async () => {
                const userId = localStorage.getItem('userId');
                if (!userId) return;

                const response = await fetch(`http://localhost:3000/users/${userId}`);
                const data = await response.json();
                setUserData(data);
            };
            getPerfil();
        }, []);


    useEffect(() => {
            const buscarDados = async () => {
                const userId = localStorage.getItem('userId');
                if (!userId) return;
    
                const response = await fetch(`http://localhost:3000/cart/${userId}`);
                const data = await response.json();
                setItensCarrinho(data);
            };
    
            buscarDados();
            
            // DICA DE OURO: Adicione um intervalo de "polling" (opcional)
            // Isso busca os dados a cada 3 segundos sozinho
            const interval = setInterval(buscarDados, 3000);
            return () => clearInterval(interval); 
    
        }, []);

    return ( 
        <>
         <section className="bg-s8 ">
                <div className="flex m-auto p-4 max-w-[1440px] gap-4">
                    <section className="w-[334px]">
                        <div className="flex flex-col gap-4 items-start p-4 bg-s7 rounded-lg">
                            <h1>Meu Perfil</h1>
                            {arrayLinks.map(item => (
                                <div>
                                    <button
                                    onClick={() => setAbaAtiva(item.route)}
                                    className={`${abaAtiva == item.route ? "text-c2" : "text-s3"} text-[18px] font-medium`}
                                    >
                                        {item.title}
                                    </button>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <div className="conteudo">
                            {/* 2. Só aparece se o número bater com o estado */}
                            {abaAtiva == 1 &&
                            <div>
                                {itensCarrinho.map(item => (
                                    <p>{item.nome} - RS {item.preco}</p>
                                ))}
                            </div>
                            }
                            {abaAtiva == 2 &&
                            <div>
                                {userData ? (
                                    <>
                                        <p>Nome: {userData.name}</p>
                                        <p>Email: {userData.email}</p>
                                        <p>Senha: {userData.password}</p> 
                                    </>
                                ) : (
                                    <p>Carregando dados...</p>
                                )}
                            </div>
                            }
                        </div>
                    </section>
                </div>
            </section>
        </>
     );
}
 
export default ProductViewPage;