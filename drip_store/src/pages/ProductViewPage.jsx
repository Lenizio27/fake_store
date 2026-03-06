import { NavLink } from "react-router-dom";
import { MeusPedidos, MinhasInformacoes, MetodosDePagamento } from "./Configuration";
import { useState } from "react";

const ProductViewPage = () => {
    const [abaAtiva, setAbaAtiva] = useState(1);
    const arrayLinks = [
        {
            route: "0",
            title: "Meu Perfil"
        },{
            route: "1",
            title: "Meus Pedidos"
        },
        {
            route: "2",
            title: "Minhas Informações"
        },
        {
            route: "3",
            title: "Metodos de Pagamento"
        },
    ]


    return ( 
        <>
         <section className="bg-s8 ">
                <div className="flex m-auto p-4 max-w-[1440px] gap-4">
                    <section className="w-[334px]">
                        <div className="flex flex-col gap-4 items-start p-4 bg-s7 rounded-lg">
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
                            {abaAtiva == 0 &&
                            <div>
                                estou no conteúdo 0
                            </div>
                            }
                            {abaAtiva == 1 &&
                            <div>
                                estou no conteúdo 1
                            </div>
                            }
                            {abaAtiva == 2 &&
                            <div>
                                <h2>Minhas Informações</h2>
                                <hr />
                                <h3>Informações Pessoais</h3>
                                <p>Nome: John Doe</p>
                                <p>Email: john.doe@example.com</p>
                                <p>cpf: 123.456.789-00</p>
                                <p>celular: (11) 99999-9999</p>
                                <h3>Informações de entrega</h3>
                                <p>Endereço: Rua Exemplo, 123</p>
                                <p>Cidade: São Paulo</p>
                                <p>Estado: SP</p>
                                <p>CEP: 01234-567</p>
                            </div>
                            }
                            {abaAtiva == 3 &&
                            <div>
                                estou no conteúdo 3
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